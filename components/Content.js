import styles from '../styles/Content.module.scss'; 
import Image from 'next/image'
import React, { Component } from 'react';

class Content extends Component {

  componentDidMount() {
    console.log("hello");
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
          <Image src="/../public/logo-mini.png" alt="Logo" width="85" height="85"/>
        </div>
        <div className={styles.album}>
          <Image src="/../public/Kokoroko.jpeg" alt="Logo" width="320" height="320"/>
        </div>
        <div className={styles.radiopitch}>
          <p className={styles.request} onClick={this.props.showSubmitForm}>Proposez-nous un son !</p> 
        </div>

        <div className="chatContainer">
          <div id="tlkio" data-channel="radioparadis"></div>
          <div className="chat" ref={el => (this.div = el)}></div>
        </div>

      </section>
    )
  }
} 



export default Content