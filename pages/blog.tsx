// import React from "react"; => tidak perlu mengimport react karena sudah disupport

import Layout from "../component/layout";

export default function Blog() {
  return(
    <Layout>
      {/* title-homepage tidak dapat digunakan di sini karena tidak di import */}
      <h1>User Blog!!</h1>
    </Layout>
  )
}