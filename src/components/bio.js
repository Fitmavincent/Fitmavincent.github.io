/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Toggler from '../components/Toggler'

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const linkStyle = {
    boxShadow: `none`,
    color: `inherit`,
    display: `flex`,
  }

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          display: `flex`,
        }}
      >
        <Link
          style={linkStyle}
          to={`/about`}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <p>
            This is <strong>{author.name}</strong>
            <br></br>
            {author.summary}
            {` `}
            {/* <a href={`https://twitter.com/${social.twitter}`}>
              You should follow him on Twitter
            </a> */}
          </p>
        </Link>
      </div>
      <Toggler></Toggler>
    </div>
  )
}

export default Bio
