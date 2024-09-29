'use client'

import { useState, useEffect} from 'react';
import Episode from "../components/Episode";
import ShowsNav from './ShowsNav';


export default function Shows(props: any) {
  const [focusShow, setFocusShow] = useState({id: 'all'});
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

      {filteredShows.length > 0 ? (
        filteredShows.map((playlist: any) =>
          playlist.tracks.map((episode: any) => <Episode key={episode.id} episode={episode} />)
        )
      ) : (
        <div>Aucun épisode trouvé</div>
      )}

    </div>
  )
}