import styles from '../../styles/Header.module.scss'
import React, { Component } from 'react';

class Header extends Component {

  render() {
    let currentMood;

    if (this.props.isMorning) {
      currentMood = <h3>07h00 - 10h00 : Musique de douche.</h3>;
    } else if (this.props.isDay) {
      currentMood = <h3>10h00 - 19h00 : Musique du monde.</h3>;
    } else if (this.props.isNight) {
      currentMood = <h3>19h00 - 00h00 : Musique de bouge.</h3>;
    } else {
      currentMood = <h3>La radio est au repos. Elle s'éveille de 7h00 à 00h00.</h3>;
    }

    return (
      <section className={styles.header}>
        <div className={styles.singleMood}>
          {currentMood}
        </div>
        { (!this.props.isMorning && !this.props.isDay && !this.props.isNight) ?
          <div className={styles.multipleMood}> 
            <h3>La radio est au repos. Elle s'éveille de 7h00 à 00h00.</h3>
          </div>
          :
          <div className={styles.multipleMood}>         
            <h3 className={this.props.isMorning ? (styles.bolder) : ''}>07h00 - 10h00 : Musique de douche.</h3>
            <h3 className={this.props.isDay ? (styles.bolder) : '' }>10h00 - 19h00 : Musique du monde.</h3>
            <h3 className={this.props.isNight ? (styles.bolder) : ''}>19h00 - 00h00 : Musique de bouge.</h3>
          </div>
        }
      
      </section>
    )
  }
}

export default Header