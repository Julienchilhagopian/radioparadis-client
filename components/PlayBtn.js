import styles from '../styles/PlayBtn.module.scss'
import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class PlayBtn extends Component {

  constructor() {
    super();
  }

  componentDidMount(){
    console.log(this.radioPlayer.audioEl);
  }
  
  render() {
  
    return (
      <div className={styles.playContainer}>
        <button onClick={this.props.togglePlay} className={this.props.isPlaying ? (styles.playBtn + " " + styles.paused) : styles.playBtn }></button>
        <ReactAudioPlayer ref={(element) => { this.radioPlayer = element; }} src="https://www.radioking.com/play/radioparadis-test"/>
      </div> 
    )
  }
} 


export default PlayBtn