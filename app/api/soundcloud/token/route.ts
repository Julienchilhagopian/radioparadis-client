// app/api/token/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'


const clientId = '5L6745YdtIFMSY4SRbSoZZfeFv1wE3vV';
const clientSecret = '85LLuWd0NZ0REfOS2YsvNyYCNOikQwbW';

// Fonction pour obtenir un nouveau jeton
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

  if (!tokenResponse.ok) {
    throw new Error(`Erreur lors de la récupération du token : ${tokenResponse.statusText}`);
  }

  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;
  const expiresIn = tokenData.expires_in; // Durée d'expiration du token en secondes

  console.log('New token fetched', accessToken)

  // On renvoie juste le token au client, il sera stocké côté client
  return NextResponse.json({ accessToken });
}

// Fonction pour rafraîchir le token
async function refreshAccessToken(refreshToken: string) {
  const tokenResponse = await fetch('https://api.soundcloud.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!tokenResponse.ok) {
    throw new Error(`Erreur lors du rafraîchissement du token : ${tokenResponse.statusText}`);
  }

  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;
  const newRefreshToken = tokenData.refresh_token;
  const expiresIn = tokenData.expires_in;

  // On met à jour les cookies
  const response = NextResponse.json({ accessToken });

  cookies().set('soundcloud_access_token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: expiresIn,
  });

  cookies().set('soundcloud_refresh_token', newRefreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: expiresIn,
  });

  return response;
}

export async function GET(request: Request) {


  return getAccessToken();
}
