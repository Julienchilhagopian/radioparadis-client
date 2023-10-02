import styles from '../../styles/DesktopHeader.module.scss';
import React, { Component } from 'react';
import DesktopPlayer from '../player/DesktopPlayer';
import Logo from '../elements/Logo';

class DesktopHeader extends Component {

  render() {
    return (
      <section className={styles.content}>
        <section className={styles.musicContent}>
          <div className={styles.radioMainHeader}>
            <div className={styles.topBar}>
              <div className={styles.logoClass}>
                <Logo
                  isMorning={this.props.isMorning}
                  isDay={this.props.isDay}
                  isPlaying={this.props.isPlaying}
                  size={150}
                />
              </div>
              <div>
                <a href="https://soundcloud.com/radio-paradis-13" target="_blank">Soundcloud</a>
                <a href="https://open.spotify.com/playlist/08wmfh933ZtrExQNbCFbyQ?si=a895de757a9947b9" target="_blank">Spotify</a>
                <a href="https://www.instagram.com/radioparadis/" target="_blank">Instagram</a>
              </div>
            </div>


            <div className={styles.desktopPlayerMainContainer}>
              <DesktopPlayer
                principalColor={this.props.principalColor}
                secondaryColor={this.props.secondaryColor}
                isTrackLoading={this.props.isTrackLoading}
                currentTrack={this.props.currentTrack}
                togglePlay={this.props.togglePlay}
                isPlaying={this.props.isPlaying}
                onVolumeChange={this.props.onVolumeChange}
                loading={this.props.loading}
                isMorning={this.props.isMorning}
                isDay={this.props.isDay}
                isNight={this.props.isNight}
              />
            </div>
          </div>
        </section>
      </section>
    )
  }
}



export default DesktopHeader