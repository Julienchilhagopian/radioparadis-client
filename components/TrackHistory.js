import styles from '../styles/TrackHistory.module.scss'
import React, { Component } from 'react';
import SongCard from './songCard';
import Logo from './Logo';
import ColorHeader from './ColorHeader';

class TrackHistory extends Component {

  constructor() {
    super();
  }
  
  render() {
    var trackHistory = this.props.history;
    return (
      <section>
        <div className={styles.headerContainer}>
          <div className={styles.headerLogo}>
            <Logo
                isMorning={this.props.isMorning} 
                isDay={this.props.isDay} 
                isPlaying={this.props.isPlaying} 
                size={60}
              />
          </div>
          <ColorHeader principalColor={this.props.principalColor} title='Sonorités antérieures'/>
          <div className={styles.headerLogo}>
            <Logo
                  className={styles.headerLogo}
                  isMorning={this.props.isMorning} 
                  isDay={this.props.isDay} 
                  isPlaying={this.props.isPlaying} 
                  size={60}
              />
          </div>
        </div>
        <div className={styles.trackHistory}>
          {
            (this.props.isHistoryLoading || !this.props.history) ? 
              <h2> Loading history </h2> 
                :
              trackHistory.map((song, index) => (
                <SongCard key={index} album={song.cover_url} artist={song.artist} songTitle={song.title} time={song.started_at}/>
              ))
          }
        </div>
      </section>
    )
  }
} 


export default TrackHistory