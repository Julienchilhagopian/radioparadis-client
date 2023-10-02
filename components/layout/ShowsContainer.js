import styles from '../../styles/ShowsContainer.module.scss'
import React, { Component } from 'react';
import TrackHistory from './TrackHistory';
import Shows from './Shows';
import LogoSeparator from './LogoSeparator';

class ShowsContainer extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section>
        <div className={styles.ShowsContainer}>
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
          <div className={styles.Shows}>
            <Shows principalColor={this.props.principalColor}/>
          </div>
        </div>
        <LogoSeparator principalColor={this.props.principalColor} />
      </section>
    )
  }
} 


export default ShowsContainer