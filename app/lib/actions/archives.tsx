// lib/actions/archives.ts
const userId = '989649643';
const API_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

// Fonction pour obtenir les pistes
export async function fetchTracks(tracksLimit: number) {
  console.log("FETCH TRACKS");

  // Appel à la route GET de route.ts qui s'occupe de la gestion des tokens
  // const tokenResponse = await fetch(`${API_URL}/api/soundcloud/token`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // if (!tokenResponse.ok) {
  //   throw new Error(`Erreur lors de la récupération du token : ${tokenResponse.statusText}`);
  // }

  // const { accessToken } = await tokenResponse.json();
  // console.log('ACCESS TOKEN FROM ROUTE:', accessToken);

  const accessToken  = "2-294368--FDs7XvcaIb9Sem5OD4mUibD"

  const tracksResponse = await fetch(
    `https://api.soundcloud.com/users/${userId}/tracks?limit=${tracksLimit}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!tracksResponse.ok) {
    const errorBody = await tracksResponse.text(); // Affiche le corps de la réponse pour plus de détails
    console.error('Erreur API SoundCloud:', tracksResponse.statusText, errorBody);
    throw new Error(`Erreur API SoundCloud: ${tracksResponse.statusText}`);
  }

  const tracks = await tracksResponse.json();
  return tracks;
}

// Fonction pour obtenir les playlists
export async function fetchPlaylists() {
  console.log("FETCH PLAYLIST");

  const tokenResponse = await fetch(`${API_URL}/api/soundcloud/token`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!tokenResponse.ok) {
    throw new Error(`Erreur lors de la récupération du token : ${tokenResponse.statusText}`);
  }

  const { accessToken } = await tokenResponse.json();
  console.log('ACCESS TOKEN FROM ROUTE:', accessToken);

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
