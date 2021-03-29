import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Header from '../components/Header'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Radio Paradis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Content />
      </main>
    </div>
  )
}
