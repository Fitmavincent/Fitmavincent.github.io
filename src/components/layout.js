import React from "react"
import Header from "../components/header"
import {rhythm} from "../utils/typography"

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {/* <header>{header}</header> */}
      <Header location={location} title={title} />
      <main>{children}</main>
      <footer
        style={{
          marginTop: rhythm(2),
          fontSize: rhythm(0.5),
        }}
      >
        Copyright © {new Date().getFullYear()}
        {` `}
        {/* , Built with <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
