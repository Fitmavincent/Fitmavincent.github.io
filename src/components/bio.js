/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Toggler from '../components/toggler'

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          gatsbyImageData(
            width: 50
            height: 50
            layout: FIXED
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP]
            transformOptions: { cropFocus: CENTER }
          )
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
          {data.avatar && (
            <GatsbyImage
              image={getImage(data.avatar)}
              alt={author.name}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `100%`,
              }}
            />
          )}
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
