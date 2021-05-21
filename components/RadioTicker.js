import styles from '../styles/RadioTicker.module.scss'
import React, { Component } from 'react';

class RadioTicker extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={styles.tickerContainer}>
        <h2 className={styles.tickerAnimation}>
          <span>{this.props.content}</span>
        </h2>
      </div>
    )
  }
} 


export default RadioTicker