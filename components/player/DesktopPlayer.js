import styles from '../../styles/DesktopPlayer.module.scss'
import React, { Component } from 'react';
import PlayBtn from './PlayBtn';
import MusicInfos from '../elements/MusicInfos';
import { Slider } from 'antd';

class DesktopPlayer extends Component {

  constructor() {
    super();
  }

  render() {
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
        <section className={styles.desktopPlayer}>
          <PlayBtn 
            togglePlay={this.props.togglePlay} 
            isPlaying={this.props.isPlaying}
            loading={this.props.loading} 
            isMorning={this.props.isMorning}
            isDay={this.props.isDay}
            isNight={this.props.isNight}
          />
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
      </div>
    )
  }
}


export default DesktopPlayer