import styles from '../styles/Content.module.scss'

export default function Content() {
  return (
    <section className={styles.content}>
        <div>
          <p>Chat</p>
          <div>
            <div id="tlkio" data-channel="radioparadis"></div>
            <script async src="http://tlk.io/embed.js" type="text/javascript"></script>
          </div>
        </div>
      <div className="about">
        <h1>Notre histoire</h1>
        <p>Le texte</p>
      </div>
    </section>
  )
} 