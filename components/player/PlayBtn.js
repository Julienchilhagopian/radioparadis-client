import styles from '../../styles/PlayBtn.module.scss'
import React, { Component } from 'react';
import Logo from '../elements/Logo';


class PlayBtn extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={styles.playContainer}>
        {
          (!this.props.isMorning && !this.props.isDay && !this.props.isNight) ?
          <button onClick={this.props.togglePlay} className={styles.playBtn} disabled></button>
          :
          <div>
            {
              (this.props.loading == false) ?
                <button onClick={this.props.togglePlay} className={this.props.isPlaying ? (styles.playBtn + " " + styles.paused) : styles.playBtn }></button>
                  :
                <div className={styles.loader}>
                  <Logo
                    isMorning={this.props.isMorning}
                    isDay={this.props.isDay}
                    isPlaying={this.props.isPlaying}
                    size={70}
                  />
                </div>
            }
          </div>
        }
      </div> 
    )
  }
} 


export default PlayBtn