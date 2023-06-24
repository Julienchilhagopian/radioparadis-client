import styles from '../../styles/Content.module.scss';
import React, { Component } from 'react';
import DesktopPlayer from '../player/DesktopPlayer';
import Logo from '../elements/Logo';

class Content extends Component {

  render() {
    return (
      <section className={styles.content}>
        <section className={styles.musicContent}>
          <div className={styles.mobileLogo}>
            <h1 style={{ 'color': this.props.principalColor }}>Radio paradis</h1>
            <div className={styles.mobileLogoContainer}>
              <Logo
                isMorning={this.props.isMorning}
                isDay={this.props.isDay}
                isPlaying={this.props.isPlaying}
                size={100}
              />
            </div>
            <div>
              <p className={styles.request} onClick={this.props.showSubmitForm}>Proposez-nous un son !</p>
            </div>
          </div>

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
              <div className={styles.footerSocial}>
                <a href="https://soundcloud.com/radio-paradis-13" target="_blank">Soundcloud</a>
                <a href="https://open.spotify.com/user/chil-hagopian?si=wHQ2N2L3RQGqUuEFyAyLFg" target="_blank">Spotify</a>
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



export default Content