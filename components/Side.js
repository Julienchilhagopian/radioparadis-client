import styles from '../styles/Side.module.scss'
import React, { Component } from 'react';
import TrackHistory from './TrackHistory';
import LogoSeparator from './LogoSeparator';
import Chat from './Chat';
import Interviews from './Interviews';

class Side extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section className={styles.side}>
        <TrackHistory 
          isMorning={this.props.isMorning} 
          isDay={this.props.isDay} 
          isPlaying={this.props.isPlaying} 
          isHistoryLoading={this.props.isHistoryLoading} 
          history={this.props.history}
          principalColor={this.props.principalColor}
        />
        <LogoSeparator principalColor={this.props.principalColor} /> 
        <div className={styles.sideContent}>
          <div className={styles.sideChat}>
            <Chat principalColor={this.props.principalColor}/>
          </div>
          <div className={styles.sideInterview}>
            <Interviews 
              isMorning={this.props.isMorning} 
              isDay={this.props.isDay} 
              isPlaying={this.props.isPlaying} 
              principalColor={this.props.principalColor}
            />
          </div>
        </div>
      </section>
    )
  }
} 


export default Side