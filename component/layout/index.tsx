import Head from "next/head";
import { Children, ReactNode } from "react";
import Footer from "../Footer";
import Header from "../header";
import styles from './Layout.module.css'


interface LayoutProps {
  children: ReactNode
  titlePage: string
}
export default function Layout(props: LayoutProps) {
  const {children, titlePage} = props;
  return (
    <>

    <Head>
      <title>Next JS | {' '} {titlePage}</title>
      <meta name="description" content="website NextJS Basic" />
    </Head>
    <div className={styles.container}>
      <Header />
      <div className={styles.content}> {children} </div>
      <Footer />
    </div>
    </>
  )
}