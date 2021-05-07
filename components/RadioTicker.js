import styles from '../styles/RadioTicker.module.scss'
import React, { Component } from 'react';
import Ticker from 'react-ticker'

class RadioTicker extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={styles.tickerContainer}>
        <Ticker mode="await">
          {({ index }) => (
            <>
              <h2>{this.props.artist} - {this.props.title}</h2>
            </> 
          )}
        </Ticker>
      </div>
    )
  }
} 


export default RadioTicker