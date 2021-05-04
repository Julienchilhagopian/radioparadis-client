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
        <img src={this.props.album} alt="Logo" width={150} height={150}/>
        <h2>{this.props.songTitle}</h2>
        <h2>{this.props.artist}</h2>
        <h2>{date.getHours()} h {date.getMinutes()}</h2>
      </div> 
    )
  }
}   


export default SongCard