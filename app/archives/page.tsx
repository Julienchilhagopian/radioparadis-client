import styles from '../styles/archives.module.scss';
import Episode from "../components/Episode";
import { fetchPlaylists } from '../lib/actions/archives';
import Shows from '../components/Shows';

export default async function Archives() {
  const playlists = await fetchPlaylists();
  // const [playlists, setPlaylists] = useState<any[]>([]);
  // const [filteredPlaylistId, setFilteredPlaylistId] = useState('all');
  // const [loading, setLoading] = useState(true);
  let filteredPlaylistId = 'all'

 

  return (
    <div className={styles.archives}>
      <h1>Archives page</h1>

      <Shows shows={playlists} />

     
    </div>
  );
}
