import styles from '../styles/Side.module.scss'
import React, { Component } from 'react';
import TrackHistory from './TrackHistory';
import LogoSeparator from './LogoSeparator';
import Chat from './Chat';
import Logo from './Logo';

class Side extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section className={styles.side}>
        <div className={styles.headerContainer}>
          <Logo isPlaying={this.props.isPlaying} size={40}/>
          <h1 className={styles.trackHistoryHeader} style={{'color': this.props.principalColor}} >Sonorités antérieures</h1>
          <Logo isPlaying={this.props.isPlaying} size={40}/>
        </div>
        <TrackHistory isHistoryLoading={this.props.isHistoryLoading} history={this.props.history}/>
        <Chat />
        <LogoSeparator 
            isMorning={this.props.isMorning} 
            isDay={this.props.isDay} 
            isNight={this.props.isNight}
          />
        <div>
          <h1>Radio Paradis chat</h1>
        </div>
      </section>
    )
  }
} 


export default Side