import styles from '../styles/LogoSeparator.module.scss'
import React, { Component } from 'react';
import Logo from './Logo';

class LogoSeparator extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={styles.separatorLogo}>
        <h3>@radioparadis</h3>
        <div className={styles.logo}>
          <Logo
              isMorning={this.props.isMorning} 
              isDay={this.props.isDay} 
              isPlaying={this.props.isPlaying} 
              size={this.props.size}
            />
        </div>
        <h3>@radioparadis</h3>
        <div className={styles.logo}>
          <Logo
              isMorning={this.props.isMorning} 
              isDay={this.props.isDay} 
              isPlaying={this.props.isPlaying} 
              size={this.props.size}
            />
        </div>
        <h3>@radioparadis</h3>
        <div className={styles.logo}>
          <Logo
              isMorning={this.props.isMorning} 
              isDay={this.props.isDay} 
              isPlaying={this.props.isPlaying} 
              size={this.props.size}
            />
        </div>
        <h3>@radioparadis</h3>
        <div className={styles.logo}>
          <Logo
              isMorning={this.props.isMorning} 
              isDay={this.props.isDay} 
              isPlaying={this.props.isPlaying} 
              size={this.props.size}
            />
        </div>
        <h3>@radioparadis</h3>
        <div className={styles.logo}>
          <Logo
              isMorning={this.props.isMorning} 
              isDay={this.props.isDay} 
              isPlaying={this.props.isPlaying} 
              size={this.props.size}
            />
        </div>
        <h3>@radioparadis</h3>
      </div>
    )
  }
} 


export default LogoSeparator