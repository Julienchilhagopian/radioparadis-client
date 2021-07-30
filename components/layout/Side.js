import styles from '../../styles/Side.module.scss'
import React, { Component } from 'react';
import TrackHistory from './TrackHistory';
import BehindRadio from './BehindRadio';
import LogoSeparator from './LogoSeparator';
import Chat from './Chat';
import Interviews from './Interviews';

class Side extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section>
        <div className={styles.side}>
          <div className={styles.trackHistorySideContainer}>
            <TrackHistory 
              isMorning={this.props.isMorning} 
              isDay={this.props.isDay} 
              isPlaying={this.props.isPlaying} 
              isHistoryLoading={this.props.isHistoryLoading} 
              history={this.props.history}
              principalColor={this.props.principalColor}
            />
          </div>
          <div className={styles.behindRadio}>
            <BehindRadio principalColor={this.props.principalColor}/>
          </div>
        </div>
        <LogoSeparator principalColor={this.props.principalColor} />
        <div className={styles.sideInterview}>
          <Interviews 
            isMorning={this.props.isMorning} 
            isDay={this.props.isDay} 
            isPlaying={this.props.isPlaying} 
            principalColor={this.props.principalColor}
          />
        </div>
      </section>
    )
  }
} 


export default Side