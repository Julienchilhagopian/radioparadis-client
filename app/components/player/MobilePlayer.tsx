'use client'

import React from "react";
import PlayButton from './PlayButton'
import styles from '../../styles/MobilePlayer.module.scss';
import PlayerContent from '../player/PlayerContent';

function MobilePlayer() {

  return (
    <div>
      <section className={styles.player}>
        <PlayButton />
        <PlayerContent
          currentTrack={this.props.currentTrack}
          isTrackLoading={this.props.isTrackLoading}
        />
      </section>
    </div>
  )
}

export default MobilePlayer
