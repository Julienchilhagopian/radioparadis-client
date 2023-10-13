import styles from '../../styles/DesktopHeader.module.scss';
import React, { Component } from 'react';
import DesktopPlayer from '../player/DesktopPlayer';
import Logo from '../elements/Logo';
import Image from 'next/image'

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
              <div className={styles.radioHeaderIntro}>
                <div>
                  <p>Radio locale née en 2022 dans le 10ème arrondissement. Aujourd’hui, Radio Paradis est une association loi 1901 qui se distingue par une programmation musicale pointue animée par une dizaine de résident.es.</p>
                </div>
                <div className={styles.radioHeaderSocials}>
                  <div onClick={()=> window.open(`${"https://soundcloud.com/radio-paradis-13"}`, "_blank")}>
                    <div>
                      <Image
                        quality={80}
                        src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/soundcloud_logo.png"}
                        alt="Logo"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  <div onClick={()=> window.open(`${"https://soundcloud.com/radio-paradis-13"}`, "_blank")}>
                    <div>
                      <Image
                        quality={80}
                        src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/spotify_logo.png"}
                        alt="Logo"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  <div onClick={()=> window.open(`${"https://soundcloud.com/radio-paradis-13"}`, "_blank")}>
                    <div>
                      <Image
                        quality={80}
                        src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/insta_logo.png"}
                        alt="Logo"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
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