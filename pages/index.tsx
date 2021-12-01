import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' //import modul Home.module.css
import Layout from '../component/layout'


const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles['title-homepage']}>Welcome Ikhwan</h1>
    </Layout>
  )
}

export default Home
