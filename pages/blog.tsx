// import React from "react"; => tidak perlu mengimport react karena sudah disupport
import Layout from "../component/layout";
import styles from '../styles/Blog.module.css'

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[]
}

export default function Blog(props: BlogProps) {

  const { dataBlog } = props
  return(
    <Layout titlePage="Blog Page">

      {dataBlog.map( blog => {
        return (
          <div className={styles.card} key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        )
      }
      )}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dataBlog = await res.json()

  return {
    props: {
      dataBlog,
    }
  }
}