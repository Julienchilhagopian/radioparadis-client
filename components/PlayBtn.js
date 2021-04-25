import styles from '../styles/PlayBtn.module.scss'
import React, { Component } from 'react';

class PlayBtn extends Component {

  constructor() {
    super();

  }
  
  render() {
    return (
      <div className={styles.playContainer}>
        <button onClick={this.props.togglePlay} className={this.props.isPlaying ? (styles.playBtn + " " + styles.paused) : styles.playBtn }></button>
      </div>
    )
  }
} 


export default PlayBtn