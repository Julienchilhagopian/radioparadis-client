import styles from '../styles/Side.module.scss'
import React, { Component } from 'react';
import SongCard from './songCard';
import TrackHistory from './TrackHistory';

class Side extends Component {

  constructor() {
    super();
  }
  
  render() {
    var trackHistory = this.props.history;
    return (
      <section className={styles.side}>
        <h1 className={styles.trackHistoryHeader}>Sonorités antérieures</h1>
        <TrackHistory isHistoryLoading={this.props.isHistoryLoading} history={this.props.history}/>
        <div>
          <h1>Radio Paradis chat</h1>
        </div>
      </section>
    )
  }
} 


export default Side