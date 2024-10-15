import styles from '../styles/archivesPage.module.scss';
import { fetchPlaylists } from '../lib/actions/archives';
import Shows from '../components/Shows';

export default async function Archives() {
  const playlists = await fetchPlaylists();
 

  return (
    <div className={styles.archivesContainer}>
      <div className={styles.archivesHeader}>
        <h1>Archives</h1>
        <p>Retrouve ici toutes les émissions de la radio</p>
      </div>

      <Shows shows={playlists} />

     
    </div>
  );
}
