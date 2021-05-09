import styles from '../styles/MobilePlayer.module.scss'
import React, { Component } from 'react';
import PlayBtn from './PlayBtn';
import MusicInfos from './MusicInfos';
import RadioTicker from './RadioTicker';

class MobilePlayer extends Component {

  constructor() {
    super();
  }
  
  render() {
    const playerColor = {
      "backgroundColor": this.props.mobileColor,
    };

    return (
      <section className={styles.player} style={playerColor}>
        <PlayBtn togglePlay={this.props.togglePlay} isPlaying={this.props.isPlaying}/>
        <MusicInfos 
            currentTrack={this.props.currentTrack} 
            isTrackLoading={this.props.isTrackLoading}
        />
      </section>
    )
  }
} 


export default MobilePlayer