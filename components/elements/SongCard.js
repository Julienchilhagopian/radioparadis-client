import styles from '../../styles/SongCard.module.scss'
import React, { Component } from 'react';
import Image from 'next/image'



class SongCard extends Component {

  constructor() {
    super();
  }

  formatTime = (date) => {
    var hours = Array.from(String(date.getHours()), Number);
    hours = (hours.length == 1) ? "0" + date.getHours() : date.getHours();

    var minutes = Array.from(String(date.getMinutes()), Number);
    minutes = (minutes.length == 1) ? "0" + date.getMinutes() : date.getMinutes();

    return hours + " h " + minutes;
  }

  render() {
    var date = new Date(this.props.time);
    var formatedTime = this.formatTime(date);

    return (
      <div className={styles.cardContainer}>
        <div className={styles.cardLogo}>
          { (this.props.album) ? 
              <Image
                src={this.props.album}
                alt="Album cover"
                width={90}
                height={90}
              />
              : 
              <p>Image de l'album</p>
          }
        </div>
        <h2 className={styles.artistName}>{this.props.artist}</h2>
        <h2 className={styles.songTitle}>{this.props.songTitle}</h2>
        <h3 className={styles.hours}>{formatedTime}</h3>
      </div>
    )
  }
}


export default SongCard