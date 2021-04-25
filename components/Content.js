import styles from '../styles/Content.module.scss'; 
import Image from 'next/image'
import React, { Component } from 'react';

class Content extends Component {

  componentDidMount() {
    const script = document.createElement("script");    
    script.async = true;    
    script.src = "http://tlk.io/embed.js";  
    script.type = "text/javascript";
    this.div.appendChild(script);  
  }

  render() {
    return (
      <section className={styles.content}>
        <section className={styles.musicContent}>
          <div className={styles.mobileLogo}>
            <Image className={this.props.isPlaying ? styles.logoRotate : ""} src="/../public/logo-mini.png" alt="Logo" width={85} height={85}/>
          </div>
          <div className={styles.album}>
            <Image src="/../public/Kokoroko.jpeg" alt="Logo" width={400} height={400}/>
          </div>

          <div className={styles.radioControls}>
            <div className={styles.desktopLogo}>
              <Image className={this.props.isPlaying ? styles.logoRotate : ""} src="/../public/logo-mini.png" alt="Logo" width={130} height={130}/>
            </div> 

            <div className={styles.radioPitch}>
              <p>La radio d'un quartier.</p>
              <p>En ces temps imparfaits.</p>
              <p>La musique comme usage du monde.</p>
              <p className={styles.request} onClick={this.props.showSubmitForm}>Proposez-nous un son !</p> 
            </div>

            <div className={styles.desktopPlayer}>
              <p>PLAYER</p>
            </div>
          </div>
        </section>

        <div className={styles.chatContainer}>
          <div className={styles.chat} id="tlkio" data-channel="radioparadis"></div>
          <div className="chat" ref={el => (this.div = el)}></div>
        </div>

        <div className={styles.footer}>
          <h3>Rue de Paradis, 10ème arrondissement.</h3>
        </div>

      </section>
    )
  }
} 



export default Content