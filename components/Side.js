import styles from '../styles/Side.module.scss'
import React, { Component } from 'react';
import TrackHistory from './TrackHistory';
import LogoSeparator from './LogoSeparator';
import Chat from './Chat';
import Logo from './Logo';
import Interviews from './Interviews';
import ColorHeader from './ColorHeader';

class Side extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section className={styles.side}>
        <div className={styles.headerContainer}>
          <Logo />
         <ColorHeader principalColor={this.props.principalColor} title='Sonorité antérieures'/>
        </div>
        <TrackHistory isHistoryLoading={this.props.isHistoryLoading} history={this.props.history}/>
        <LogoSeparator  
              principalColor={this.props.principalColor}
        /> 
        <div className={styles.sideContent}>
          <Chat principalColor={this.props.principalColor}/>
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