import styles from '../../styles/MusicInfos.module.scss'
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
          <h3>...contact de la source musicale...</h3>
          :
          <RadioTicker content={this.props.currentTrack.artist} />
        }
      </div>
    )
  }
}


export default MusicInfos