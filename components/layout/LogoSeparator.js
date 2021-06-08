import styles from '../../styles/LogoSeparator.module.scss';
import React, { Component } from 'react';

class LogoSeparator extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div onClick={() => window.open("https://www.instagram.com/radioparadis/", "_blank")} className={styles.tickerContainer} style={{ 'color': this.props.principalColor }}>
        <div className={styles.marquee}>
          <div>
            <span> @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis</span>
            <span> @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis @radioparadis</span>
          </div>
        </div>
      </div>
    )
  }
}


export default LogoSeparator