'use client'

import { useState, useEffect } from 'react';
import Episode from "../components/Episode";
import ShowsNav from './ShowsNav';
import styles from '../styles/shows.module.scss';



export default function Shows(props: any) {
  const [focusShow, setFocusShow] = useState({ id: 'all' });
  const [filteredShows, setFilteredShows] = useState<any[]>(props.shows);

  useEffect(() => {
    if (focusShow.id !== 'all') {
      const filtered = props.shows.filter((playlist: any) => playlist.id === focusShow.id);
      setFilteredShows(filtered);
    } else {
      setFilteredShows(props.shows);
    }
  }, [focusShow]);


  return (
    <div>
      <ShowsNav shows={props.shows} setFocusShow={setFocusShow} />

      <div className={styles.showsContainer}>
        {filteredShows.length > 0 ? (
          filteredShows.map((playlist: any) =>
            playlist.tracks.map((episode: any) =>
              <div key={episode.id} className={styles.showEpisode}>
                <Episode key={episode.id} episode={episode} quality={30}/>
              </div>
            )
          )
        ) : (
          <div>Aucun épisode trouvé</div>
        )}
      </div>

    </div>
  )
}