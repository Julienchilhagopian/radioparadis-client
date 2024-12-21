'use client'

import { useContext } from "react";
import { PlayContext } from '../context/playContext';
import Image from 'next/image';
import styles from '../styles/episode.module.scss'


function Episode(props: any) {
  const { replayUrl, setReplayUrl } = useContext(PlayContext);
  const { playingReplay, setPlayingReplay } = useContext(PlayContext);

  const getImageUrl = (url: string) => {
    const clean_url = url ? url.replace(
      'large',
      props.quality < 90 ? 't500x500' : 't3000x3000'
    ) : 
    'https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/pochette-min.png'

    
    return clean_url
  }

  return (
    <div className={styles.episode} onClick={() => {
      setReplayUrl(props.episode.permalink_url)
      setPlayingReplay(true)
    }
    }>
      <div>
        <Image
          quality={props.quality}
          src={getImageUrl(props.episode.artwork_url)}
          alt="Episode image"
          className={styles.episodeImage}
          width={3000}
          height={3000}
          />
      <h2>{props.episode.title}</h2>
      <p>{props.episode.genre}</p>
      </div>
    </div>
  )
}

export default Episode
