import 'antd/dist/antd.css';
import '../styles/globals.scss'
import '../styles/SubmitForm.scss'
import { inconsolata, prompt } from "../styles/fonts"
import { NextUIProvider } from "@nextui-org/react";


function MyApp({ Component, pageProps }) {

  return (  
    <NextUIProvider>
      <div className={inconsolata.variable + " " + prompt.variable}>
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
);
}

export default MyApp
