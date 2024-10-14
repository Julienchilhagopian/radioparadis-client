'use client'

import React from "react";
import { useEffect, useContext } from "react";
import styles from '../../styles/playButton.module.scss';
import ReactAudioPlayer from 'react-audio-player';
import { PlayContext } from '../../context/playContext'; 

function PlayButton() {
  let radioPlayer: any;
  const radioURL = "https://server.radioparadis.live:8000/radio.mp3";
  const { playing, setPlaying } = useContext(PlayContext);
  const { playingReplay, setPlayingReplay } = useContext(PlayContext);


  function play() {
    try {
      radioPlayer.audioEl.current.load();
      radioPlayer.audioEl.current.play();
    } catch (e) {
      //this.errorMsg();
      console.log("Player error", e);
    }
  }

  function pause() {
    try {
      radioPlayer.audioEl.current.pause();
    } catch (e) {
      //this.errorMsg();
      console.log("Player error", e);
    }
  }

  useEffect(() => {
    if (playing) {
      play();
      setPlayingReplay(false)
    } else {
      pause();
    }
  }, [playing]);

  return (
    <div>
      <ReactAudioPlayer
        ref={(element) => {
          radioPlayer = element;
          // if (radioPlayer) {
          //   radioPlayer.audioEl.current.volume = this.state.volume;
          // }
        }}
        src={radioURL}
        preload={'auto'}
      //onCanPlay={this.hideLoader}
      />

      <div className={styles.playContainer}>
        {
          // (this.props.loading == false) ?
          <button onClick={() => setPlaying(!playing)} className={playing ? (styles.playBtn + " " + styles.paused) : styles.playBtn}></button>
          // :
          // <div className={styles.loader}>
          //   <Logo
          //     isMorning={this.props.isMorning}
          //     isDay={this.props.isDay}
          //     isPlaying={this.props.isPlaying}
          //     size={70}
          //   />
          // </div>
        }
      </div>
    </div>
  )
}

export default PlayButton
