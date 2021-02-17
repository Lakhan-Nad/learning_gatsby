import React from "react"
import Layout from "../components/Layout.js"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/blog/">Check our latest articles Hello jsbsj</Link>
      </p>
    </Layout>
  )
}

export default NotFound
