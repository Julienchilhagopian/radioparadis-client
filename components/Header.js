import styles from '../styles/Header.module.scss'
import React, { Component } from 'react';

class Header extends Component {


  render() {
    return (
      <section className={styles.header}>
        <div>
          <h1 className={styles.radioname}>radio paradis</h1>
          <p>Née au coeur du 10ème arrondissement, tournée vers le monde.</p>
        </div>

        <div>
          <button className='requestBtn' onClick={this.props.showSubmitForm}>Proposer une musique !</button>
        </div>
      </section>
    )
  }
}

export default Header