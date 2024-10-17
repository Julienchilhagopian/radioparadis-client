'use server'

export async function getCurrentTrack() {
  const currentTrack_url = "https://server.radioparadis.live/api/nowplaying";

  try {
    const currentTrack = await fetch(currentTrack_url)
    let currentTrackData = await currentTrack.json()
    
    return currentTrackData[0]
  } catch (err) {
    return err
  }
}