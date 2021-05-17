import styles from '../styles/LogoSeparator.module.scss'
import React, { Component } from 'react';

class LogoSeparator extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={styles.tickerContainer} style={{'color': this.props.principalColor}}>
        <p className={styles.marquee}>
          <span>@radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis &nbsp;</span>
        </p>
        <p className={styles.marquee + " " + styles.marquee2}>
          <span>@radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis &nbsp;</span>
        </p>
      </div>
    )
  }
} 


export default LogoSeparator