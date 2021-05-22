import styles from '../../styles/DesktopPlayer.module.scss'
import React, { Component } from 'react';
import PlayBtn from './PlayBtn';
import Album from '../elements/Album'
import MusicInfos from '../elements/MusicInfos';
import { Slider } from 'antd';

class DesktopPlayer extends Component {

  constructor() {
    super();
  }

  render() {
    const playerColor = {
      "backgroundColor": this.props.secondaryColor,
    };

    const sliderStyle = {
      display: 'inline-block',
      "backgroundColor": this.props.principalColor,
    };

    return (
      <div className={styles.desktopPlayerContainer}>
        <div className={styles.volumeContainer} style={sliderStyle}>
          <Slider
            onChange={(value) => {
              this.props.onVolumeChange(value);
            }}
            vertical
            defaultValue={50}
          />
        </div>
        <section className={styles.desktopPlayer} style={playerColor}>
          <PlayBtn togglePlay={this.props.togglePlay} isPlaying={this.props.isPlaying} />
          <div className={styles.desktopPlayerContent}>
            <MusicInfos
              currentTrack={this.props.currentTrack}
              isTrackLoading={this.props.isTrackLoading}
            />
            <div className={styles.enDirect}>
              <h2>En direct </h2>
              <span className={[styles.circle, styles.blink].join(' ')}></span>
            </div>
          </div>
        </section>
        <div className={styles.album}>
          <Album
            isTrackLoading={this.props.isTrackLoading}
            currentTrack={this.props.currentTrack}
            width={600}
            height={600}
          />
        </div>
      </div>
    )
  }
}


export default DesktopPlayer