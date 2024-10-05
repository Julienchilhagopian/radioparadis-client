'use client'

import React from "react";
import PlayButton from './PlayButton'
import styles from '../../styles/mobilePlayer.module.scss';
import PlayerContent from './PlayerContent';

interface Props {
  isSticky: boolean
}


function Player(props: Props) {

  return (
    <div>
      <section className={`${styles.player} ${props.isSticky ? styles.stickyPlayer : styles.notStickyPlayer}`}>
        <PlayButton />
        <PlayerContent />
      </section>
    </div>
  )
}

export default Player
