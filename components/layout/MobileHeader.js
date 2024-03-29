import styles from '../../styles/MobileHeader.module.scss'
import React, { Component } from 'react';
import Logo from '../elements/Logo';

class MobileHeader extends Component {

  render() {
    let currentMood;

    if (this.props.isMorning) {
      currentMood = <h3>07h00 - 10h00 : Musique de douche.</h3>;
    } else if (this.props.isDay) {
      currentMood = <h3>10h00 - 19h00 : Musique de travail.</h3>;
    } else if (this.props.isNight) {
      currentMood = <h3>19h00 - 00h00 : Musique de bouge.</h3>;
    } else {
      currentMood = <h3>La radio est au repos. Elle s'éveille de 7h00 à 00h00.</h3>;
    }

    if(this.props.isSunday) {
      currentMood = <h3>07h00 - 00h00 : Jazzzz.</h3>;
    }

    return (
      <section className={styles.header}>
        {/* <div className={styles.mood}>
          {currentMood}
        </div>   */}
          <div>
            <h1>radio paradis</h1>
            <div className={styles.mobileLogoContainer}>
              <Logo
                isMorning={this.props.isMorning}
                isDay={this.props.isDay}
                isPlaying={this.props.isPlaying}
                size={100}
              />
            </div>
            <div className={styles.introRadioContainer}>
              <div className={styles.introRadioText}>
                <p>Radio locale née en 2022 dans le 10ème arrondissement. Aujourd’hui, Radio Paradis est une association loi 1901 qui se distingue par une programmation musicale pointue animée par une dizaine de résident.es.</p>
              </div>
            </div>
          </div>
      </section>
    )
  }
}

export default MobileHeader