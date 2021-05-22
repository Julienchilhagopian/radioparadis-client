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
    }

    return (
      <section className={styles.header}>
        <div className={styles.singleMood}>
          {currentMood}
        </div>
        <div className={styles.multipleMood}>
          <h3>07h00 - 10h00 : Musique de douche.</h3>
          <h3>10h00 - 19h00 : Musique du monde.</h3>
          <h3>19h00 - 00h00 : Musique de bouge.</h3>
        </div>

        {/* <div>
          <button className='requestBtn' onClick={this.props.showSubmitForm}>Proposer une musique !</button>
        </div> */}
      </section>
    )
  }
}

export default Header