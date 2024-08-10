'use server'

export async function getCurrentTrack() {
  const currentTrack_url = "https://c28.radioboss.fm/w/nowplayinginfo?u=436";

  try {
    const currentTrack = await fetch(currentTrack_url, { next: { revalidate: 3000 } })
    let currentTrackData = await currentTrack.json()
    
    return currentTrackData
  } catch (err) {
    return err
  }
}