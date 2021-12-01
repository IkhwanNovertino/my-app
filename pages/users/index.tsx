import Head from "next/head";
import Layout from "../../component/layout";


/**
 * Halaman ini digunakan jika kita ingin memlakukan routing ke "localhost:3000/users",
 * karena users berbentuk folder maka harus ada file index didalamnya.
 */
export default function Users() {
  return (
    
    <Layout titlePage="Users Page">
      <h1>Users Page</h1>
    </Layout>
    
  )
}