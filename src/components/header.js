import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation"

import style from "styled-components"
import { rhythm, scale } from "../utils/typography"

const Header = ({ location, title }) => {
  const H1 = style.h1`
    ...${scale(1.5)}
    margin-bottom: ${rhythm(1.5)};
    margin-top: 0;
  `

  const H3 = style.h3`
    font-family: 'Roboto', sans-serif;
    margin-top: 0,
  `

  const linkStyle = {
    boxShadow: `none`,
    color: `inherit`,
  }

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <H1>
        <Link
          style={linkStyle}
          to={`/`}
        >
          {title}
        </Link>
      </H1>
    )
  } else {
    header = (
      <H3>
        <Link
          style={linkStyle}
          to={`/`}
        >
          {title}
        </Link>
      </H3>
    )
  }
  return(
    <header>
      <div>
        {header}
        <Navigation location={location}/>
      </div>
    </header>
  )
}

export default Header
