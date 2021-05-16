import styles from '../styles/Footer.module.scss'
import React, { Component } from 'react';

class Footer extends Component {

  constructor() {
    super();
  }

  
  render() {
    return (
      <section className={styles.footerContainer}>
        <div className={styles.footerSpeech}>
          <p>Sur Radio Paradis nous militons pour une musique tournée vers le monde.</p>
          <p>Faites nous part de vos projets. Nous serons ravis de vous accueillir à l'antenne : 
            <a href="mailto:bonjour@radioparadis.com"> bonjour@radioparadis.com</a>
          </p>
        </div>
        <div className={styles.footerSocial}>
          <h3>Instagram</h3>
          <h3>Soundcloud</h3>
        </div>
        <div className={styles.logo}>
          <h1>Radio Paradis</h1>
          <h3>Rue de paradis, 10ème arrondissement.</h3>
        </div>
      </section>
    )
  }
} 


export default Footer