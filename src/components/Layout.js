import React from "react"
import Footer from "./Footer"
import Header from "./Header"

import '../stylesheets/base.css'
import layoutStyles from '../stylesheets/layout.module.css'

const Layout = function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
        <Footer />
    </div>
  )
}

export default Layout
