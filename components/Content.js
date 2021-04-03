import styles from '../styles/Content.module.scss'

export default function Content() {
  return (
    <section className={styles.content}>
        <div>
          <div className={styles.chat} id="tlkio" data-channel="radioalhara"></div>
          <script async src="http://tlk.io/embed.js" type="text/javascript"></script>
        </div>
      <div className={styles.about}>
        <h1>Notre histoire</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis aliquet elit, id dignissim arcu efficitur vitae. Suspendisse sodales odio ornare viverra maximus. 
          Curabitur cursus ac leo tincidunt ullamcorper. Duis arcu ante, eleifend vel eleifend sed, tincidunt eget diam. Curabitur et accumsan erat. Nullam mattis ligula sed nisi condimentum, pellentesque condimentum velit luctus. 
          Vestibulum commodo tempor erat a porttitor. Nulla lacinia faucibus ex at scelerisque. Aliquam ac eleifend ex. Duis ultrices, purus et tempor hendrerit, mauris justo dapibus dolor, nec dictum magna ante non sem. 
          Aenean mollis iaculis metus viverra cursus. Aliquam a euismod lorem.</p>
      </div>
    </section>
  )
} 