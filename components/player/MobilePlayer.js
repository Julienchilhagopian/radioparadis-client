import styles from '../../styles/MobilePlayer.module.scss'
import React, { Component } from 'react';
import PlayBtn from './PlayBtn';
import MusicInfos from '../elements/MusicInfos';

class MobilePlayer extends Component {

  constructor() {
    super();
  }
  
  render() {
    const playerColor = {
      "backgroundColor": this.props.mobileColor,
    };

    return (
      <section className={styles.player}>
        <PlayBtn 
          togglePlay={this.props.togglePlay} 
          isPlaying={this.props.isPlaying}
          loading={this.props.loading}
          isMorning={this.props.isMorning} 
          isDay={this.props.isDay} 
          isNight={this.props.isNight}
        />
        <MusicInfos 
            currentTrack={this.props.currentTrack} 
            isTrackLoading={this.props.isTrackLoading}
        />
      </section>
    )
  }
} 


export default MobilePlayer