import styles from '../styles/Logo.module.scss'
import React, { Component } from 'react';
import Image from 'next/image'

class Logo extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.logo}>
          {
              (this.props.isMorning) ? 
                <Image className={(this.props.isPlaying) ? styles.logoRotate : ""} src="/../public/logo-morning.png" alt="Logo" width={this.props.size} height={this.props.size}/>
                : this.props.isDay ? 
                <Image className={(this.props.isPlaying) ? styles.logoRotate : ""} src="/../public/logo-day.png" alt="Logo" width={this.props.size} height={this.props.size}/>
                :
                <Image className={(this.props.isPlaying) ? styles.logoRotate : ""} src="/../public/logo-night.png" alt="Logo" width={this.props.size} height={this.props.size}/>
            }
      </div>
    )
  }
} 


export default Logo