'use client'

import { useContext } from "react";
import { PlayContext } from '../../context/playContext';
import React from "react";
import styles from '../../styles/replayPlayer.module.scss';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


function ReplayPlayer(props: any) {
  const { playingReplay, setPlayingReplay } = useContext(PlayContext);
  const { playing, setPlaying } = useContext(PlayContext);
  const { replayUrl, setReplayUrl } = useContext(PlayContext);

  const defaultUrl = "https://soundcloud.com/radio-paradis-13/vagabond-3"

  function onPlay() {
    setPlayingReplay(true)
    setPlaying(false)
  }

  function onPause() {
    setPlayingReplay(false)
  }

  return (
    (replayUrl) ? 
    <div className={styles.replayPlayer}>
      <ReactPlayer
        url={replayUrl ? replayUrl : defaultUrl}
        playing={playingReplay} 
        controls={true}
        onPlay={onPlay}
        onPause={onPause}
      />
    </div>
   : 
   <div className={styles.invisible}></div>
  )
}

export default ReplayPlayer
