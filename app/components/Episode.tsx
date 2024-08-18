'use client'

import { useContext } from "react";
import { PlayContext } from '../context/playContext';
import Image from 'next/image';
import styles from '../styles/episode.module.scss'


type PropsType = {
  title: string,
  stream_url: string
}


function Episode(props: any) {
  const { playingReplay, setPlayingReplay } = useContext(PlayContext);
  const { replayUrl, setReplayUrl } = useContext(PlayContext);

  const getImageUrl = (url: string) => {
    const clean_url = url.replace(
      'large',
      't500x500'
    )
    return clean_url
  }

  return (
    <div className={styles.episode} onClick={() => {
      setPlayingReplay(!playingReplay)
      setReplayUrl(props.episode.permalink_url)
    }
    }>
      <h2>{props.episode.title}</h2>
      <Image
        quality={100}
        src={getImageUrl(props.episode.artwork_url)}
        alt="Episode image"
        width={200}
        height={200}
        className={styles.episodeImage}
      />
    </div>
  )
}

export default Episode
