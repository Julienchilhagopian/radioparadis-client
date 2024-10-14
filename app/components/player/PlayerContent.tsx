'use client'

import React, { useEffect, useState, useContext } from "react";
import styles from '../../styles/playerContent.module.scss';
import TextTicker from "../TextTicker";
import { getCurrentTrack } from '../../lib/actions/currentTrack';
import { PlayContext } from '../../context/playContext'; 

function PlayerContent() {
  const {currentTrack, setCurrentTrack} = useContext(PlayContext)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fonction pour récupérer la piste actuelle
  const fetchCurrentTrack = async () => {
    try {
      const data = await getCurrentTrack();
      if (data && data?.now_playing && data?.now_playing?.song) {
        // Vérifie si le morceau actuel a changé
        if (!currentTrack || currentTrack?.now_playing?.song.id !== data?.now_playing?.song.id) {
          setCurrentTrack(data);
        }
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching current track:', err);
      setError('Failed to load track.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentTrack(); // Fetch initial track
    const intervalId = setInterval(fetchCurrentTrack, 120000); // Fetch every 2 minute

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  useEffect(() => {
    if (currentTrack && currentTrack.now_playing) {
  
      // Calculer le temps restant jusqu'à la fin du morceau
      const remainingTime = currentTrack.now_playing.duration - currentTrack.now_playing.elapsed;

      if (remainingTime > 0) {
        const timerId = setTimeout(() => {
          fetchCurrentTrack(); // Fetch la nouvelle piste quand le morceau se termine
        }, remainingTime * 1000); // Convertit en millisecondes

        return () => clearTimeout(timerId); // Nettoyage du timer
      }
    }
  }, [currentTrack]); // Exécute quand currentTrack change

  if (loading) return <div>Loading...</div>;
  if (error) return <p>{error}</p>;

  const track = currentTrack?.now_playing?.song;

  return (
    <div className={styles.playerContent}>
      {track ? (
        <>
          <TextTicker content={`${track.artist} - ${track.title}`} />
        </>
      ) : (
        <p>No track currently playing.</p>
      )}
    </div>
  );
}

export default PlayerContent;
