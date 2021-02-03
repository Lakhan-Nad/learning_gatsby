import React from "react"
import Layout from "../components/Layout"

const ContactPage = function ContactPage() {
  return (
    <Layout>
      <h1>Contact!</h1>
      <a href={`https://github.com/Lakhan-Nad`} rel="noreferrer">
        Github
      </a>
      <br />
      <a href={`https://www.linkedin.in/lakhan-nad`} rel="noreferrer">
        Linkedin
      </a>
    </Layout>
  )
}

export default ContactPage
