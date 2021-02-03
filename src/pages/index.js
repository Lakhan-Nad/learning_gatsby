import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const IndexPage = function IndexPage() {
  return (
    <Layout>
      <h1>Hello!</h1>
      <p>I am a developer.</p>
      <p>
        Need a Devloper? <Link to="/contact">Contact me.</Link>
      </p>
      <p>
        <a
          href="https://github.com/Lakhan-Nad"
          target="_blank"
          rel="noreferrer"
        >
          My Github
        </a>
      </p>
    </Layout>
  )
}

export default IndexPage
