import styles from '../../styles/Header.module.scss'
import React, { Component } from 'react';

class Header extends Component {

  render() {
    let currentMood;

    if (this.props.isMorning) {
      currentMood = <h3>07h00 - 10h00 : Musique de douche.</h3>;
    } else if (this.props.isDay) {
      currentMood = <h3>10h00 - 19h00 : Musique du jour.</h3>;
    } else if (this.props.isNight) {
      currentMood = <h3>19h00 - 00h00 : Musique de bouge.</h3>;
    }

    return (
      <section className={styles.header}>
        <div className={styles.singleMood}>
          {currentMood}
        </div>
        <div className={styles.multipleMood}>         
          <h3 className={this.props.isMorning ? (styles.bolder) : ''}>07h00 - 10h00 : Musique de douche.</h3>
          <h3 className={this.props.isDay ? (styles.bolder) : '' }>10h00 - 19h00 : Musique du jour.</h3>
          <h3 className={this.props.isNight ? (styles.bolder) : ''}>19h00 - 00h00 : Musique qui bouge.</h3>
        </div>
      </section>
    )
  }
}

export default Header