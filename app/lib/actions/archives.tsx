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

  // //const accessToken  = "2-294368--FDs7XvcaIb9Sem5OD4mUibD"

  // const tracksResponse = await fetch(
  //   `https://api.soundcloud.com/users/${userId}/tracks?limit=${tracksLimit}`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   }
  // );

  // if (!tracksResponse.ok) {
  //   const errorBody = await tracksResponse.text(); // Affiche le corps de la réponse pour plus de détails
  //   console.error('Erreur API SoundCloud:', tracksResponse.statusText, errorBody);
  //   throw new Error(`Erreur API SoundCloud: ${tracksResponse.statusText}`);
  // }

  // const tracks = await tracksResponse.json();
  // console.log("TRACKS", tracks)

  const tracks = [
    {
      "id": 123456789,
      "title": "Chill Vibes",
      "user": {
        "id": 987654321,
        "username": "DJ Chill",
        "permalink_url": "https://soundcloud.com/djchill"
      },
      "permalink_url": "https://soundcloud.com/djchill/chill-vibes",
      "artwork_url": "https://i1.sndcdn.com/artworks-000123456789-abcde-t500x500.jpg",
      "waveform_url": "https://wis.sndcdn.com/abcde_m.png",
      "stream_url": "https://api.soundcloud.com/tracks/123456789/stream",
      "duration": 240000,  // durée en millisecondes (4 minutes)
      "genre": "Lo-fi",
      "playback_count": 1200,
      "likes_count": 150,
      "downloadable": false,
      "description": "A relaxing lo-fi track to unwind.",
      "created_at": "2024-09-30T10:00:00Z"
    },
    {
      "id": 987654321,
      "title": "Summer Beats",
      "user": {
        "id": 123456789,
        "username": "Sunset DJ",
        "permalink_url": "https://soundcloud.com/sunsetdj"
      },
      "permalink_url": "https://soundcloud.com/sunsetdj/summer-beats",
      "artwork_url": "https://i1.sndcdn.com/artworks-000987654321-zyxwv-t500x500.jpg",
      "waveform_url": "https://wis.sndcdn.com/zyxwv_m.png",
      "stream_url": "https://api.soundcloud.com/tracks/987654321/stream",
      "duration": 180000,  // durée en millisecondes (3 minutes)
      "genre": "House",
      "playback_count": 3400,
      "likes_count": 300,
      "downloadable": true,
      "description": "An energetic house track to vibe with the summer sun.",
      "created_at": "2024-08-15T08:30:00Z"
    }
  ]
  


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
