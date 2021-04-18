import styles from '../styles/Player.module.scss'
import React, { Component } from 'react';

class Player extends Component {

  constructor() {
    super();

    this.state = {
      isPlaying: false
    };

    this.togglePlay = this.togglePlay.bind(this);
  }


  togglePlay() {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying
    }));
  }
  
  render() {
    return (
      <section className={styles.player}>
        <div className={styles.playContainer}>
          <button onClick={this.togglePlay} className={this.state.isPlaying ? (styles.playBtn + " " + styles.paused) : styles.playBtn }></button>
        </div>
        <div className={styles.currentInfos}>
          <h1 className={styles.songInfo}>PORTICO QUARTET - Knee deep in the north sea</h1>
          <h2 className={styles.albumInfo}>Knee deep in the north sea</h2>
        </div>
      </section>
    )
  }
} 


export default Player