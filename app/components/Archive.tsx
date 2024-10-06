
import Episode from "../components/Episode";
import styles from '../styles/archives.module.scss'


export default async function Archive(props: any) {

  return (
    <div className={styles.archivesContainer}>
        <h1>Archives</h1>
        {
        props.tracks.length > 0 ? (
          props.tracks.map((episode:any) => (
            <Episode key={episode.id} episode={episode} />
          ))
        )
        :
        <div></div>
        }
    </div>
  )
}