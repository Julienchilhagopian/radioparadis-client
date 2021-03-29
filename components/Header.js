import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <section className={styles.header}>
      <div>
        <h1 className={styles.radioname}>radio paradis</h1>
        <p>Née au coeur du 10ème arrondissement, tournée vers le monde.</p>
      </div>
      <div>
        <button className={styles.songRequestBtn}>Proposer une musique !</button>
      </div>
    </section>
  )
}