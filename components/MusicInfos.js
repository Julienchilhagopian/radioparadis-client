import styles from '../styles/MusicInfos.module.scss'
import React, { Component } from 'react';
import RadioTicker from './RadioTicker';

class MusicInfos extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={styles.musicInfos}>
        { (this.props.isTrackLoading || !this.props.currentTrack) ? 
              <h2>...contact de la source musicale...</h2>
            :
              <RadioTicker content={this.props.currentTrack.artist + " - " + this.props.currentTrack.title}/>
        }
        {
          (this.props.currentTrack.album) ? 
            <h2 className={styles.albumInfo}>{this.props.currentTrack.album}</h2>
            :
            <h2></h2>
        }
      </div>
    )
  }
} 


export default MusicInfos