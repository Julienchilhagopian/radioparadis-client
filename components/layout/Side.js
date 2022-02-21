import styles from '../../styles/Side.module.scss'
import React, { Component } from 'react';
import TrackHistory from './TrackHistory';
import Interviews from './Interviews';
import LogoSeparator from './LogoSeparator';
import { isMobile } from "react-device-detect";

class Side extends Component {

  constructor() {
    super();
  }
  
  render() {
    const bgColorc = {
      "backgroundColorDesktop": this.props.principalColor,
      "backgroundColorMobile": 'white',
    };

    return (
      <section>
        <div className={styles.side} style={{ "backgroundColor":  isMobile ? bgColorc.backgroundColorMobile : bgColorc.backgroundColorDesktop}}>
          <div>
             <TrackHistory 
              isMorning={this.props.isMorning} 
              isDay={this.props.isDay} 
              isPlaying={this.props.isPlaying} 
              isHistoryLoading={this.props.isHistoryLoading} 
              history={this.props.history}
              principalColor={this.props.principalColor}
            />
          </div>
          <div className={styles.Interviews}>
            <Interviews principalColor={this.props.principalColor}/>
          </div>
        </div>
        <LogoSeparator principalColor={this.props.principalColor} />
      </section>
    )
  }
} 


export default Side