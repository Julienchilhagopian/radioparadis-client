import { NextResponse } from 'next/server';
import { fetchPlaylists } from '../../lib/actions/archives';

export async function GET() {
  try {
    console.log("asking playlist")
    const playlists = await fetchPlaylists();
    return NextResponse.json(playlists);
  } catch (error) {
    console.error('Erreur lors de la récupération des playlists:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des playlists.' }, { status: 500 });
  }
}