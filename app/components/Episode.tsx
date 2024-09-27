'use client'

import { useContext } from "react";
import { PlayContext } from '../context/playContext';
import Image from 'next/image';
import styles from '../styles/episode.module.scss'


function Episode(props: any) {
  const { replayUrl, setReplayUrl } = useContext(PlayContext);
  const { playingReplay, setPlayingReplay } = useContext(PlayContext);

  const getImageUrl = (url: string) => {
    const clean_url = url.replace(
      'large',
      't500x500'
    )
    return clean_url
  }

  return (
    <div className={styles.episode} onClick={() => {
      setReplayUrl(props.episode.permalink_url)
      setPlayingReplay(true)
    }
    }>
      <h2>{props.episode.title}</h2>
      <div>
        <Image
          quality={100}
          src={getImageUrl(props.episode.artwork_url)}
          alt="Episode image"
          className={styles.episodeImage}
          width={100}
          height={100}
          style={ {position: 'relative'}}
        />
      </div>
    </div>
  )
}

export default Episode
