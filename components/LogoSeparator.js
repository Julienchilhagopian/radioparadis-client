import styles from '../styles/LogoSeparator.module.scss'
import React, { Component } from 'react';
import Image from 'next/image'

class LogoSeparator extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section className={styles.tickerContainer}>
        {
          (this.props.isMorning) ? 
            <Image src="/../public/logo-morning.png" alt="Logo" width={50} height={50}/>
            : this.props.isDay ? 
       
              // <div className={styles.tickerContent}>
              //   <div className={styles.tickerLogo}>
              //     <Image src="/../public/logo-day.png" alt="Logo" width={50} height={50}/>
              //   </div>
              //   <h1>Radio Paradis</h1>
              //   <div className={styles.tickerLogo}>
              //     <Image src="/../public/logo-day.png" alt="Logo" width={50} height={50}/>
              //   </div>
              // </div>
              <div className={styles.separator}>
                <Image src="/../public/logo-day.png" alt="Logo" width={40} height={40}/>
                <Image src="/../public/logo-day.png" alt="Logo" width={40} height={40}/>
                <Image src="/../public/logo-day.png" alt="Logo" width={40} height={40}/>
                <Image src="/../public/logo-day.png" alt="Logo" width={40} height={40}/>
                <Image src="/../public/logo-day.png" alt="Logo" width={40} height={40}/>
                <Image src="/../public/logo-day.png" alt="Logo" width={40} height={40}/>
                <Image src="/../public/logo-day.png" alt="Logo" width={40} height={40}/>
                <Image src="/../public/logo-day.png" alt="Logo" width={40} height={40}/>
                <Image src="/../public/logo-day.png" alt="Logo" width={40} height={40}/>
                <Image src="/../public/logo-day.png" alt="Logo" width={40} height={40}/>
              </div>
            :
            <div>
              <img src="/logo-night.png" alt="Logo" width={50} height={50}/>
            </div>
        }
      </section>
    )
  }
} 


export default LogoSeparator