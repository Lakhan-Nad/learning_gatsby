import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from '../stylesheets/footer.module.css'

const Footer = function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author} &copy; 2021</p>
    </footer>
  )
}

export default Footer
