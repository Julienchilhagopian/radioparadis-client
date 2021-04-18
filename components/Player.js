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
        <div>
          <button onClick={this.togglePlay} className={this.state.isPlaying ? (styles.playBtn + " " + styles.paused) : styles.playBtn }></button>
        </div>
        <div className={styles.currentInfos}>
          <h1>PORTICO QUARTET - Knee deep in the north see</h1>
          <h2>Knee deep in the north see</h2>
        </div>
      </section>
    )
  }
} 


export default Player