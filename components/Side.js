import styles from '../styles/Side.module.scss'
import React, { Component } from 'react';
import SongCard from './songCard';
var data = require('../public/data'); 

class Side extends Component {

  constructor() {
    super();
  }
  
  render() {
    var trackHistory = data.default;
    return (
      <section className={styles.side}>
        <h1 className={styles.trackHistoryHeader}>Sonorités antérieures</h1>
        <div className={styles.trackHistory}>
          {trackHistory.map((song, index) => (
            <SongCard key={index} album={song.cover_url} artist={song.artist} songTitle={song.title} time={song.started_at}/>
          ))
          }
        </div>
      </section>
    )
  }
} 


export default Side