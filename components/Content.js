import styles from '../styles/Content.module.scss'; 
import Image from 'next/image'
import React, { Component } from 'react';

class Content extends Component {

  render() {
    return (
      <section className={styles.content}>
        <div className={styles.logo}>
          <Image src="/../public/logo-mini.png" alt="Logo" width="110" height="115"/>
        </div>
        <div className={styles.album}>
          <Image src="/../public/Kokoroko.jpeg" alt="Logo" width="320" height="320"/>
        </div>
        <div className={styles.album}>
          <Image src="/../public/Kokoroko.jpeg" alt="Logo" width="320" height="320"/>
        </div>
        <div className={styles.album}>
          <Image src="/../public/Kokoroko.jpeg" alt="Logo" width="320" height="320"/>
        </div>
          <p className={styles.request} onClick={this.props.showSubmitForm}>Proposez-nous un son !</p> 
      </section>
    )
  }
} 



export default Content