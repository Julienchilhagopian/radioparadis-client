import styles from '../styles/SongCard.module.scss'
import React, { Component } from 'react';
import Image from 'next/image'



class SongCard extends Component {

  constructor() {
    super();
  }
  
  render() {
    var date = new Date(this.props.time); 
    return (
      <div className={styles.cardContainer}>
        <img src={this.props.album} alt="Logo" width={70} height={70}/>
        <h2 className={styles.artistName}>{this.props.artist}</h2>
        <h2 className={styles.songTitle}>{this.props.songTitle}</h2>
        <h3 className={styles.hours}>{date.getHours()} h {date.getMinutes()}</h3>
      </div> 
    )
  }
}   


export default SongCard