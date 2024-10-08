// lib/actions/archives.ts
import { MongoClient } from 'mongodb';

const uri:string = process.env.NEXT_MONGO_URI;
const client = new MongoClient(uri);

const dbName = process.env.NEXT_MONGO_DB_NAME; // Remplace par le nom de ta base de données
const collectionName = process.env.NEXT_MONGO_COLLECTION_NAME;

let accessToken: string | null = null;
let refreshToken: string | null = null;
let tokenExpiry: number | null = null;

const clientId = process.env.NEXT_SOUNDCLOUD_CLIENT_ID;
const clientSecret = process.env.NEXT_SOUNDCLOUD_CLIENT_SECRET;
const soundCloudUserId = process.env.NEXT_SOUNDCLOUD_USER_ID; // ID du compte SoundCloud à partir duquel récupérer les sons

// Fonction pour obtenir un nouveau jeton
async function getAccessToken() {
  const tokenResponse = await fetch('https://api.soundcloud.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  console.log('ASKING NEW TOKEN');

  if (!tokenResponse.ok) {
    const errorText = await tokenResponse.text();
    console.error("Error response from API:", errorText);
    throw new Error(`Failed to fetch access token: ${tokenResponse.statusText}`);
  }

  const tokenData = await tokenResponse.json();
  accessToken = tokenData.access_token;
  refreshToken = tokenData.refresh_token;
  tokenExpiry = Date.now() + tokenData.expires_in * 1000;

  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  await collection.updateOne(
    { type: 'accessToken' },
    { $set: { token: accessToken, expiry: tokenExpiry } },
    { upsert: true }
  );
  
  await collection.updateOne(
    { type: 'refreshToken' },
    { $set: { token: refreshToken, expiry: tokenExpiry } },
    { upsert: true }
  );
}

async function refreshAccessToken() {
  console.log('REFRESHING TOKEN');

  const tokenResponse = await fetch('https://api.soundcloud.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken || '',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  const tokenData = await tokenResponse.json();

  if (tokenData.access_token) {
    accessToken = tokenData.access_token;
    refreshToken = tokenData.refresh_token;
    tokenExpiry = Date.now() + tokenData.expires_in * 1000;

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.updateOne(
      { type: 'accessToken' },
      { $set: { token: accessToken, expiry: tokenExpiry } }
    );
    
    await collection.updateOne(
      { type: 'refreshToken' },
      { $set: { token: refreshToken, expiry: tokenExpiry } }
    );
  } else {
    throw new Error('Erreur lors du rafraîchissement du token.');
  }
}

export async function fetchTracks(tracksLimit: number) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  
  const accessTokenDoc = await collection.findOne({ type: 'accessToken' });
  const refreshTokenDoc = await collection.findOne({ type: 'refreshToken' });

  accessToken = accessTokenDoc?.token || null;
  refreshToken = refreshTokenDoc?.token || null;
  tokenExpiry = accessTokenDoc?.expiry || null;

  const tokenExpiryConverted = tokenExpiry ? tokenExpiry : 0;

  console.log('TOKEN EXPIRY FETCH TRACKS : ', tokenExpiry);
  console.log('REFRESH TOKEN', refreshToken);
  console.log('ACCESS TOKEN', accessToken);
  console.log('DATE NOW >= TOKEN EXPIRY', Date.now() >= tokenExpiryConverted);

  if (!accessToken || !tokenExpiry || Date.now() >= tokenExpiryConverted) {
    if (!refreshToken) {
      await getAccessToken();
    } else {
      await refreshAccessToken();
    }
  }

  const tracksResponse = await fetch(
    `https://api.soundcloud.com/users/${soundCloudUserId}/tracks?limit=${tracksLimit}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  ); 

  console.log("USING TOKEN FOR TRACKS : ", accessToken)

  if (!tracksResponse.ok) {
    const errorBody = await tracksResponse.text();
    console.error('Erreur API SoundCloud:', tracksResponse.statusText, errorBody);
    throw new Error(`Erreur API SoundCloud: ${tracksResponse.statusText}`);
  }

  const tracks = await tracksResponse.json();
  return tracks;
}

export async function fetchPlaylists() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const accessTokenDoc = await collection.findOne({ type: 'accessToken' });
  const refreshTokenDoc = await collection.findOne({ type: 'refreshToken' });

  accessToken = accessTokenDoc?.token || null;
  refreshToken = refreshTokenDoc?.token || null;
  tokenExpiry = accessTokenDoc?.expiry || null;

  const tokenExpiryConverted = tokenExpiry ? tokenExpiry : 0;

  console.log('TOKEN EXPIRY FETCH PLAYLIST : ', tokenExpiry);
  console.log('REFRESH TOKEN', refreshToken);
  console.log('ACCESS TOKEN', accessToken);
  console.log('DATE NOW >= TOKEN EXPIRY', Date.now() >= tokenExpiryConverted);

  if (!accessToken || !tokenExpiry || Date.now() >= tokenExpiryConverted) {
    if (!refreshToken) {
      await getAccessToken();
    } else {
      await refreshAccessToken();
    }
  }

  console.log("USING TOKEN FOR PLAYLIST : ", accessToken)

  const playlistResponse = await fetch(
    `https://api.soundcloud.com/users/${soundCloudUserId}/playlists`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!playlistResponse.ok) {
    throw new Error(`Erreur API SoundCloud: ${playlistResponse.statusText}`);
  }

  const playlists = await playlistResponse.json();
  return playlists;
}
