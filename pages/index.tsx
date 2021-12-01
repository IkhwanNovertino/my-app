import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../component/header'


const Home: NextPage = () => {
  return (
    <>
    <Header />
      <h1>Welcome Ikhwan</h1>
    </>
  )
}

export default Home
