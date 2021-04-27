import styles from '../styles/DesktopPlayer.module.scss'
import React, { Component } from 'react';
import PlayBtn from './PlayBtn';
import RadioTicker from './RadioTicker'

class DesktopPlayer extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section className={styles.desktopPlayer}>
        <PlayBtn togglePlay={this.props.togglePlay} isPlaying={this.props.isPlaying}/>
        <div className={styles.desktopPlayerContent}>
          <div className={styles.musicInfos}>
            <RadioTicker />
            <h2 className={styles.albumInfo}>Knee deep in the north sea</h2>
          </div>
         <div className={styles.enDirect}>
            <h2>En direct </h2>
            <span className={[styles.circle, styles.blink].join(' ')}></span>
          </div>
        </div>
      </section>
    )
  }
} 


export default DesktopPlayer