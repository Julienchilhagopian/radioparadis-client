import styles from '../styles/TrackHistory.module.scss'
import React, { Component } from 'react';
import SongCard from './songCard';

class TrackHistory extends Component {

  constructor() {
    super();
  }
  
  render() {
    var trackHistory = this.props.history;
    return (
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
    )
  }
} 


export default TrackHistory