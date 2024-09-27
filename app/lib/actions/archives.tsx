let accessToken: string | null = null;
let refreshToken: string | null = null;
let tokenExpiry: number | null = null;

const clientId = '5L6745YdtIFMSY4SRbSoZZfeFv1wE3vV';
const clientSecret = '85LLuWd0NZ0REfOS2YsvNyYCNOikQwbW';
const userId = '989649643';


const tracks_backup = [
  {
    title: 'tracks 1',
    permalink_url: 'https://soundcloud.com/radio-paradis-13/disco-heat-9-mona-bone',
    artwork_url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
  },
  {
    title: 'tracks 1',
    permalink_url: 'https://soundcloud.com/radio-paradis-13/disco-heat-9-mona-bone',
    artwork_url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
  },
  {
    title: 'tracks 1',
    permalink_url: 'https://soundcloud.com/radio-paradis-13/disco-heat-9-mona-bone',
    artwork_url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
  },
  {
    title: 'tracks 1',
    permalink_url: 'https://soundcloud.com/radio-paradis-13/disco-heat-9-mona-bone',
    artwork_url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
  },
  {
    title: 'tracks 1',
    permalink_url: 'https://soundcloud.com/radio-paradis-13/disco-heat-9-mona-bone',
    artwork_url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
  },
  {
    title: 'tracks 1',
    permalink_url: 'https://soundcloud.com/radio-paradis-13/disco-heat-9-mona-bone',
    artwork_url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
  },
  {
    title: 'tracks 1',
    permalink_url: 'https://soundcloud.com/radio-paradis-13/disco-heat-9-mona-bone',
    artwork_url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
  },
  {
    title: 'tracks 1',
    permalink_url: 'https://soundcloud.com/radio-paradis-13/disco-heat-9-mona-bone',
    artwork_url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
  },
  {
    title: 'tracks 1',
    permalink_url: 'https://soundcloud.com/radio-paradis-13/disco-heat-9-mona-bone',
    artwork_url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
  },
  {
    title: 'tracks 1',
    permalink_url: 'https://soundcloud.com/radio-paradis-13/disco-heat-9-mona-bone',
    artwork_url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
  },
  {
    title: 'tracks 1',
    permalink_url: 'https://soundcloud.com/radio-paradis-13/disco-heat-9-mona-bone',
    artwork_url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg'
  }
]

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


  console.log("Token response status:", tokenResponse.status);
  if (!tokenResponse.ok) {
    const errorText = await tokenResponse.text();
    console.error("Error response from API:", errorText);
    throw new Error(`Failed to fetch access token: ${tokenResponse.statusText}`);
  }

  const tokenData = await tokenResponse.json();
  accessToken = tokenData.access_token;
  refreshToken = tokenData.refresh_token; // On stocke aussi le refresh token
  tokenExpiry = Date.now() + tokenData.expires_in * 1000; // On calcule l'heure d'expiration
}

// Fonction pour rafraîchir le token d'accès
async function refreshAccessToken() {
  const tokenResponse = await fetch('https://api.soundcloud.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken || '', // Utilise le refresh token stocké
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  const tokenData = await tokenResponse.json();
  if (tokenData.access_token) {
    accessToken = tokenData.access_token;
    refreshToken = tokenData.refresh_token; // Met à jour le refresh token
    tokenExpiry = Date.now() + tokenData.expires_in * 1000;
  } else {
    throw new Error('Erreur lors du rafraîchissement du token.');
  }
}

// Fonction principale pour récupérer les tracks
export async function fetchTracks(tracksLimit: number) {
  //Si le token n'existe pas ou a expiré, le régénérer
  if (!accessToken || !tokenExpiry || Date.now() >= tokenExpiry) {
    if (!refreshToken) {
      console.log("no refresh token")
      // Si pas de refresh token, on obtient un nouveau jeton
      await getAccessToken();
    } else {
      // Sinon on rafraîchit le jeton
      console.log("refreshing token")
      await refreshAccessToken();
    }
  }

  // Faire la requête pour récupérer les tracks
  const tracksResponse = await fetch(
    `https://api.soundcloud.com/users/989649643/tracks?limit=${tracksLimit}`,
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
  console.log(tracks.length)
  return tracks;
}