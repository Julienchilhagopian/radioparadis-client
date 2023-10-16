import styles from '../../styles/Footer.module.scss'
import React, { Component } from 'react';

class Footer extends Component {

  constructor() {
    super();
  }


  render() {
    return (
      <section className={styles.footerContainer}>
        <div className={styles.footerSpeech}>
          <p>La radio c'est une dizaine de résident.es et huit bénévoles engagé.es pour représenter la diversité de la scène musicale Parisienne.</p>
          <p>Faites nous part de vos idées. Nous serons ravis de vous accueillir à l'antenne :
            <a href="mailto:13radioparadis@gmail.com"> 13radioparadis@gmail.com</a>
          </p>
        </div>
        <div className={styles.footerSocial}>
          <a href="https://www.instagram.com/radioparadis/" target="_blank">Instagram</a>
          <a href="https://open.spotify.com/playlist/08wmfh933ZtrExQNbCFbyQ?si=a895de757a9947b9" target="_blank">Spotify</a>
          <a href="https://soundcloud.com/radio-paradis-13" target="_blank">Soundcloud</a>
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