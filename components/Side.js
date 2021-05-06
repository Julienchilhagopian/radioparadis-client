import styles from '../styles/Side.module.scss'
import React, { Component } from 'react';
import SongCard from './songCard';
var data = require('../public/data'); 

class Side extends Component {

  constructor() {
    super();
  }
  
  render() {
    var trackHistory = this.props.history;
    return (
      <section className={styles.side}>
        <h1 className={styles.trackHistoryHeader}>Sonorités antérieures</h1>
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
        <div>
          <h1>Radio Paradis chat</h1>
        </div>
      </section>
    )
  }
} 


export default Side