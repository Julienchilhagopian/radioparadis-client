import styles from '../styles/Side.module.scss'
import React, { Component } from 'react';
import TrackHistory from './TrackHistory';
import LogoSeparator from './LogoSeparator';

class Side extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section className={styles.side}>
        <h1 className={styles.trackHistoryHeader} style={{'color': this.props.principalColor}} >Sonorités antérieures</h1>
        <TrackHistory isHistoryLoading={this.props.isHistoryLoading} history={this.props.history}/>
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