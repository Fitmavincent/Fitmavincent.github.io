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
      <p>About Vince. He is no rock star, just a <strong>Obscure Language Developer</strong></p>
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