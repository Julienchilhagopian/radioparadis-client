import styles from '../../styles/Logo.module.scss'
import React, { Component } from 'react';
import Image from 'next/image'

class Logo extends Component {

  constructor() {
    super();

    this.logoDayURL = 'https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/logo-day.png';
    this.logoNightURL = 'https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/logo-night.png';
  }

  render() {
    return (
      <div className={styles.logo}>
        {
          <Image className={(this.props.isPlaying) ? styles.logoRotate : ""} src={this.logoNightURL} alt="Logo" width={this.props.size} height={this.props.size} />
        }
      </div>
    )
  }
}


export default Logo