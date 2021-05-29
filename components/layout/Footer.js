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
          <p>Sur Radio Paradis, nous militons pour une musique tournée vers le monde.</p>
          <p>Faites nous part de vos idées. Nous serons ravis de vous accueillir à l'antenne :
            <a href="mailto:13radioparadis@gmail.com"> 13radioparadis@gmail.com</a>
          </p>
        </div>
        <div className={styles.footerSocial}>
          <a href="" target="_blank">Instagram</a>
          <a href="https://open.spotify.com/user/chil-hagopian?si=wHQ2N2L3RQGqUuEFyAyLFg" target="_blank">Spotify</a>
          <a href="https://soundcloud.com/radio-paradis-13" target="_blank">Soundcloud</a>
          <a href="https://www.mixcloud.com/radioparadis/" target="_blank">Mixcloud</a>
        </div>
        <div className={styles.logo}>
          <h1>Radio Paradis</h1>
          <div>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="hosted_button_id" value="2N3QVAFTRSAZL" />
              <input type="image" src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/fr_FR/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
          <h3>Rue de paradis, 10ème arrondissement.</h3>
        </div>
      </section>
    )
  }
}


export default Footer