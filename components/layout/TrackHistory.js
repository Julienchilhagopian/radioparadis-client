import styles from '../../styles/TrackHistory.module.scss'
import React, { Component } from 'react';
import SongCard from '../elements/SongCard';
import Logo from '../elements/Logo';
import ColorHeader from '../elements/ColorHeader';

class TrackHistory extends Component {

  constructor() {
    super();
  }

  render() {
    var trackHistory = this.props.history;
    return (
      <section>
        <div className={styles.headerContainer}>
          <ColorHeader principalColor={this.props.principalColor} title='Les derniers sons' />
          <div className={styles.headerLogo}>
            <Logo
              isMorning={this.props.isMorning}
              isDay={this.props.isDay}
              isPlaying={this.props.isPlaying}
              size={50}
            />
          </div>
        </div>
        <div className={styles.trackHistory}>
            {
              (this.props.isHistoryLoading || !this.props.history) ?
                <h2> Loading history </h2>
                :
                trackHistory.map((song, index) => (
                  <SongCard key={index} album={song.cover_url} artist={song.artist} songTitle={song.title} time={song.started_at} />
                ))
            }
          <div className={styles.headerLogo}>
            <Logo
              isMorning={this.props.isMorning}
              isDay={this.props.isDay}
              isPlaying={this.props.isPlaying}
              size={50}
            />
          </div>
        </div>
      </section>
    )
  }
}


export default TrackHistory