import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (    
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />      
      <p>About this Vince. Not much to say. One word: <strong>Speechless</strong></p>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`