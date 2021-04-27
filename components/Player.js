import styles from '../styles/Player.module.scss'
import React, { Component } from 'react';
import PlayBtn from './PlayBtn';
import RadioTicker from './RadioTicker';

class Player extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section className={styles.player}>
        <PlayBtn togglePlay={this.props.togglePlay} isPlaying={this.props.isPlaying}/>
        <div className={styles.currentInfos}>
          <RadioTicker />
          <h2 className={styles.albumInfo}>Knee deep in the north sea</h2>
        </div>
      </section>
    )
  }
} 


export default Player