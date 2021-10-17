import styles from '../../styles/TrackHistory.module.scss'
import React, { Component } from 'react';

class TrackHistory extends Component {

  constructor() {
    super();
  }

  render() {
    var trackHistory = this.props.history;
    return (
      <section>
        <div className={styles.trackHistory}>
        <h3 className={styles.historyHeader}>Les derniers sons :</h3>
            {
              (this.props.isHistoryLoading || !this.props.history) ?
                <h2> Loading history </h2>
                :
                trackHistory.slice(0, 3).map((song, index) => (
                  //<SongCard key={index} album={song.cover_url} artist={song.artist} songTitle={song.title} time={song.started_at} />
                  <h3 key={index} className={styles.previousTrack}>{song.title}</h3>
                ))
            }
        </div>
      </section>
    )
  }
}


export default TrackHistory