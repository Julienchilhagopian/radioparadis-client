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
            <div className={styles.desktopHeader}>
              <h1>Radio paradis</h1>
            </div>
            {/* <div className={styles.radioPitch}>
              <div className={styles.logoClass}>
                <Logo
                  isMorning={this.props.isMorning}
                  isDay={this.props.isDay}
                  isPlaying={this.props.isPlaying}
                  size={110}
                />
              </div>
              <div className={styles.radioPitchText}>
                <h3>La radio d'un quartier.</h3>
                <h3>En ces temps imparfaits.</h3>
                <h3>La musique comme usage du monde.</h3>
                <p className={styles.request} onClick={this.props.showSubmitForm}>Proposez-nous un son !</p>
              </div>
              <div className={styles.logoClass}>
                <Logo
                  isMorning={this.props.isMorning}
                  isDay={this.props.isDay}
                  isPlaying={this.props.isPlaying}
                  size={110}
                />
              </div>
            </div> */}
            <div className={styles.logoClass}>
              <Logo
                isMorning={this.props.isMorning}
                isDay={this.props.isDay}
                isPlaying={this.props.isPlaying}
                size={110}
              />
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

        <div className={styles.footer}>
          <h3>Rue de Paradis, 10ème arrondissement.</h3>
          <p className={styles.request} onClick={this.props.showSubmitForm}>Proposez-nous un son !</p>
        </div>

      </section>
    )
  }
}



export default Content