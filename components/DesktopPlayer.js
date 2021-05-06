import styles from '../styles/DesktopPlayer.module.scss'
import React, { Component } from 'react';
import PlayBtn from './PlayBtn';
import RadioTicker from './RadioTicker'
import Image from 'next/image'

class DesktopPlayer extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={styles.desktopPlayerContainer}>
       
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
        <div className={styles.album}>
            { this.props.isTrackLoading ? 
                  <Image src="/../public/logo-day.png" alt="Logo" width={600} height={600}/>
                :
                  <Image className={styles.imgTest} src={this.props.currentTrack.cover} alt="Logo" width={600} height={600}/> }
        </div>
      </div>
    )
  }
} 


export default DesktopPlayer