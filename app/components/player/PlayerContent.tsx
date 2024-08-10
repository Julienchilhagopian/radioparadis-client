'use client'

import React from "react";
import styles from '../styles/playerContent.module.scss';

function PlayerContent() {

  return (
    <div>
     <div className={styles.playerContent}>
        { (this.props.isTrackLoading || !this.props.currentTrack) ?
          <h3>...contact de la source musicale...</h3>
          :
          <RadioTicker content={this.props.currentTrack.artist} />
        }
      </div>
    </div>
  )
}

export default PlayerContent
