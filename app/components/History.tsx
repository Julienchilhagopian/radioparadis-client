'use client'
import styles from '../styles/history.module.scss'
import { PlayContext } from '../context/playContext';
import React, { useContext } from "react";
import TextTicker from './TextTicker';


export default function History(props: any) {
  const {currentTrack, setCurrentTrack} = useContext(PlayContext);

  const songHistory = currentTrack?.song_history || [];

  // Créer une chaîne de caractères à partir de l'historique des chansons
  const historyContent = songHistory
    .map(track => `${track.song.artist} - ${track.song.title}`) // Formater chaque chanson
    .join(' | '); // Joindre avec un séparateur, ici ' | '

  return (
    <div className={styles.historyContainer}>
        <TextTicker content={"précédemment : " + historyContent} />
    </div>
  )
}