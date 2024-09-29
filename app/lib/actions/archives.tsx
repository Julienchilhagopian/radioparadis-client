// lib/actions/archives.ts
import {redis, connectRedis}  from '../server/redis'; // Assurez-vous que ce module n'est jamais importé côté client

let accessToken: string | null = null;
let refreshToken: string | null = null;
let tokenExpiry: number | null = null;

const clientId = '5L6745YdtIFMSY4SRbSoZZfeFv1wE3vV';
const clientSecret = '85LLuWd0NZ0REfOS2YsvNyYCNOikQwbW';
const userId = '989649643';


// Fonction pour obtenir un nouveau jeton
async function getAccessToken() {
  await connectRedis(); 
  
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

  console.log('ASKING NEW TOKEN')

  if (!tokenResponse.ok) {
    const errorText = await tokenResponse.text();
    console.error("Error response from API:", errorText);
    throw new Error(`Failed to fetch access token: ${tokenResponse.statusText}`);
  }

  const tokenData = await tokenResponse.json();
  accessToken = tokenData.access_token;
  refreshToken = tokenData.refresh_token;
  tokenExpiry = Date.now() + tokenData.expires_in * 1000;

  await redis.set('soundcloud_access_token', accessToken, { EX: tokenData.expires_in });
  await redis.set('soundcloud_refresh_token', refreshToken, { EX: tokenData.expires_in });
}

async function refreshAccessToken() {
  await connectRedis(); 

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

  console.log('refresh token', tokenData)

  if (tokenData.access_token) {
    accessToken = tokenData.access_token;
    refreshToken = tokenData.refresh_token;
    tokenExpiry = Date.now() + tokenData.expires_in * 1000;

    await redis.set('soundcloud_access_token', accessToken, { EX: tokenData.expires_in });
    await redis.set('soundcloud_refresh_token', refreshToken, { EX: tokenData.expires_in });
  } else {
    throw new Error('Erreur lors du rafraîchissement du token.');
  }
}

export async function fetchTracks(tracksLimit: number) {
  await connectRedis(); 

  console.log("FETCH TRACKS")

  accessToken = await redis.get('soundcloud_access_token');
  refreshToken = await redis.get('soundcloud_refresh_token');
  tokenExpiry = await redis.ttl('soundcloud_access_token');

  if (!accessToken || !tokenExpiry || Date.now() >= tokenExpiry) {
    if (!refreshToken) {
      await getAccessToken();
    } else {
      await refreshAccessToken();
    }
  }

  const tracksResponse = await fetch(
    `https://api.soundcloud.com/users/${userId}/tracks?limit=${tracksLimit}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!tracksResponse.ok) {
    throw new Error(`Erreur API SoundCloud: ${tracksResponse.statusText}`);
  }

  const tracks = await tracksResponse.json();
  return tracks;
}

export async function fetchPlaylists() {
  await connectRedis();

  console.log("FETCH PLAYLIST")

  accessToken = await redis.get('soundcloud_access_token');
  refreshToken = await redis.get('soundcloud_refresh_token');
  tokenExpiry = await redis.ttl('soundcloud_access_token');

  if (!accessToken || !tokenExpiry || Date.now() >= tokenExpiry) {
    if (!refreshToken) {
      await getAccessToken();
    } else {
      await refreshAccessToken();
    }
  }

  const playlistResponse = await fetch(
    `https://api.soundcloud.com/users/${userId}/playlists`,
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