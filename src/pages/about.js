import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const aboutImageOne = data.aboutOne?.childImageSharp?.fluid;
  const aboutImageTwo = data.aboutTwo?.childImageSharp?.fluid;
  const aboutImageThree = data.aboutThree?.childImageSharp?.fluid;
  const aboutImages = [aboutImageOne, aboutImageTwo, aboutImageThree];
  const aboutImage = aboutImages[Math.floor(Math.random()*aboutImages.length)];

  return (    
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />      
      <p>About Vince. He is no rock star, just a <strong>Developer</strong></p>
      <Image
        className="splash-img"
        fluid={aboutImage}
        alt="about-iamge"
      />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    aboutOne: file(absolutePath: { regex: "/about-pic-1.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 590, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutTwo: file(absolutePath: { regex: "/about-pic-2.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 790, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutThree: file(absolutePath: { regex: "/about-pic-3.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 790, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`