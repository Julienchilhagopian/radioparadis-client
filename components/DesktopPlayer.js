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
    const playerColor = {
      "backgroundColor": this.props.secondaryColor,
    };

    return (
      <div className={styles.desktopPlayerContainer}>
       
        <section className={styles.desktopPlayer} style={playerColor}>
          <PlayBtn togglePlay={this.props.togglePlay} isPlaying={this.props.isPlaying}/>
          <div className={styles.desktopPlayerContent}>
            <div className={styles.musicInfos}>
              { (this.props.isTrackLoading || !this.props.currentTrack) ? 
                    <h2>...contact de la source musicale...</h2>
                  :
                    <RadioTicker artist={this.props.currentTrack.artist} title={this.props.currentTrack.title}/>
              }
              {
                (this.props.currentTrack.album) ? 
                  <h2 className={styles.albumInfo}>{this.props.currentTrack.album}</h2>
                  :
                  <h2></h2>
              }
            </div>
          <div className={styles.enDirect}>
              <h2>En direct </h2>
              <span className={[styles.circle, styles.blink].join(' ')}></span>
            </div>
          </div>
        </section>
        <div className={styles.album}>
            { (this.props.isTrackLoading || !this.props.currentTrack) ? 
                  <Image src="/../public/logo-day.png" alt="Logo" width={600} height={600}/>
                :
                  <Image 
                    src={this.props.currentTrack.cover} 
                    alt="Album cover" 
                    width={600} 
                    height={600}
                  /> 
            }
        </div>
      </div>
    )
  }
} 


export default DesktopPlayer