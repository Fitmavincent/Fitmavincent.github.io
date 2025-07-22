import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const aboutImageOne = data.aboutOne ? getImage(data.aboutOne) : null;
  const aboutImageTwo = data.aboutTwo ? getImage(data.aboutTwo) : null;
  const aboutImageThree = data.aboutThree ? getImage(data.aboutThree) : null;
  const aboutImages = [aboutImageOne, aboutImageTwo, aboutImageThree].filter(Boolean);
  const aboutImage = aboutImages.length > 0 ? aboutImages[Math.floor(Math.random()*aboutImages.length)] : null;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <p>About Vince. type type type</p>
      {aboutImage && (
        <GatsbyImage
          className="splash-img"
          image={aboutImage}
          alt="about-image"
        />
      )}
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    aboutOne: file(absolutePath: { regex: "/about-pic-1.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 590, height: 800)
      }
    }
    aboutTwo: file(absolutePath: { regex: "/about-pic-2.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 790, height: 600)
      }
    }
    aboutThree: file(absolutePath: { regex: "/about-pic-3.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 790, height: 600)
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`