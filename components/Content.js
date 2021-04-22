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
        <div className={styles.logo}>
          <Image className={this.props.isPlaying ? styles.logoRotate : ""} src="/../public/logo-mini.png" alt="Logo" width="85" height="85"/>
        </div>
        <div className={styles.album}>
          <Image src="/../public/Kokoroko.jpeg" alt="Logo" width="300" height="300"/>
        </div>
        <div>
          <p className={styles.request} onClick={this.props.showSubmitForm}>Proposez-nous un son !</p> 
        </div>

        <div className={styles.chatContainer}>
          <div className={styles.chat} id="tlkio" data-channel="radioparadis"></div>
          <div className="chat" ref={el => (this.div = el)}></div>
        </div>

        <div className={styles.footer}>
          <p>Rue de Paradis, 10ème arrondissement.</p>
        </div>

      </section>
    )
  }
} 



export default Content