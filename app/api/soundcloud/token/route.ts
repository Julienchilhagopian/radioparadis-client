// app/api/token/route.ts
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'


const clientId = '5L6745YdtIFMSY4SRbSoZZfeFv1wE3vV';
const clientSecret = '85LLuWd0NZ0REfOS2YsvNyYCNOikQwbW';

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
  const refreshToken = tokenData.refresh_token;
  const expiresIn = tokenData.expires_in; // Durée d'expiration du token

  // On set le token et refresh token dans les cookies
  const response = NextResponse.json({ accessToken });

  response.cookies.set('soundcloud_access_token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: expiresIn,
  });

  response.cookies.set('soundcloud_refresh_token', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: expiresIn,
  });

  const allCookies = cookies().getAll();
  console.log('ALL COOKIES:', allCookies);

  return response;
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

  const allCookies = cookies().getAll();
  console.log('ALL COOKIES GET:', allCookies);
  console.log("REQUEST COOKIES", request.cookies)

  const accessToken = request.cookies.get('soundcloud_access_token')?.value;
  const refreshToken = request.cookies.get('soundcloud_refresh_token')?.value;

  if (accessToken) {
    console.log('Token already exists, returning existing access token.');
    return NextResponse.json({ accessToken });
  }

  if (refreshToken) {
    console.log('No access token found, attempting to refresh token.');
    return refreshAccessToken(refreshToken);
  }

  console.log("ACCESS TOKEN", accessToken)

  await getAccessToken();

  console.log('No tokens found, fetching new access token.');
  return NextResponse.redirect(request.url);
}
