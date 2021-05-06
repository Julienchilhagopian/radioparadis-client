import styles from '../styles/Content.module.scss'; 
import Image from 'next/image'
import React, { Component } from 'react';
import DesktopPlayer from './DesktopPlayer';

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
            <Image className={this.props.isPlaying ? styles.logoRotate : ""} src="/../public/logo-day.png" alt="Logo" width={85} height={85}/>
          </div>
          <div className={styles.album}>
            <Image src="/../public/Kokoroko.jpeg" alt="Logo" width={400} height={400}/>
          </div>

          <div className={styles.radioControls}>
            <div className={styles.desktopLogo}>
              <Image className={(this.props.isPlaying && this.props.isMorning) ? styles.logoRotate : ""} src="/../public/logo-morning.png" alt="Logo" width={120} height={120}/>
              <Image className={(this.props.isPlaying && this.props.isDay) ? styles.logoRotate : ""} src="/../public/logo-day.png" alt="Logo" width={120} height={120}/>
              <Image className={(this.props.isPlaying && this.props.isNight) ? styles.logoRotate : ""} src="/../public/logo-night.png" alt="Logo" width={120} height={120}/>
            </div> 

            <div className={styles.radioPitch}>
              <p>La radio d'un quartier.</p>
              <p>En ces temps imparfaits.</p>
              <p>La musique comme usage du monde.</p>
              <p className={styles.request} onClick={this.props.showSubmitForm}>Proposez-nous un son !</p> 
            </div>

            <DesktopPlayer isTrackLoading={this.props.isTrackLoading} currentTrack={this.props.currentTrack} togglePlay={this.props.togglePlay} isPlaying={this.props.isPlaying}/>
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