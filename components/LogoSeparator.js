import styles from '../styles/LogoSeparator.module.scss'
import React, { Component } from 'react';
import Logo from './Logo';

class LogoSeparator extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section className={styles.separatorContainer}>
          <Logo 
            isMorning={this.props.isMorning} 
            isDay={this.props.isDay} 
            isPlaying={this.props.isPlaying} 
            size={50}
          /> 
          <Logo 
            isMorning={this.props.isMorning} 
            isDay={this.props.isDay} 
            isPlaying={this.props.isPlaying} 
            size={50}
          /> 
          <Logo 
            isMorning={this.props.isMorning} 
            isDay={this.props.isDay} 
            isPlaying={this.props.isPlaying} 
            size={50}
          /> 
          <Logo 
            isMorning={this.props.isMorning} 
            isDay={this.props.isDay} 
            isPlaying={this.props.isPlaying} 
            size={50}
          /> 
      </section>
    )
  }
} 


export default LogoSeparator