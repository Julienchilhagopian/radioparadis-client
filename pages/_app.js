import 'antd/dist/antd.css';
import '../styles/globals.scss'
import '../styles/SubmitForm.scss'
import { inconsolata, prompt } from "../styles/fonts"

function MyApp({ Component, pageProps }) {
  return <div className={inconsolata.variable + " " + prompt.variable}><Component {...pageProps} /></div>
}

export default MyApp
