import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Navigation = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            menuLinks {
              name
              url
            }
          }
        }
      }
    `
  )
  const navLinks = data.site.siteMetadata.menuLinks
  const filteredNavLinks = navLinks.filter(link => link.url !== location.pathname)
  return (
    <nav
      style={{
        py: 2, // Short form for paddingTop and paddingBottom
      }}
    >
      <ul
        style={{
          display: `flex`,
          flex: 1,
          margin: 0,
          padding: 0,
          listStyle: `none`,
        }}
      >
        {filteredNavLinks.map(link => (
          <li
            style={{
              marginRight: rhythm(1),
              ":last-of-type": {
                marginRight: 0,
                padding: 0
              },
            }}
          >
            <Link
              style={{
                fontFamily: `Roboto, sans-serif`,
                fontWeight: `bold`,
                boxShadow: `none`,
              }}
              as={Link}
              to={link.url}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation