// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import { rhythm } from "../utils/typography"

import '../styles/global.css';

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          cover: any
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <Projects />
      <div className="projects-blog-separator"></div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const coverImage = node.frontmatter.cover ? getImage(node.frontmatter.cover) : null
        return (
          <article key={node.fields.slug} className="splash-item">
            <header>
              <div className="splash-col">
                <h2
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {coverImage && (
                    <GatsbyImage
                      className='splash-img'
                      image={coverImage}
                      alt={title}
                      style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        minWidth: 50,
                      }}
                    />
                  )}
                </Link>
                <small>{node.frontmatter.date}</small>
              </div>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter:{
        frontmatter: {
          title: {regex: "/([^hidden])([^underconstruction])/"}
        }
      }
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            cover {
              childImageSharp{
                gatsbyImageData(width: 590, height: 150)
              }
            }
          }
        }
      }
    }
  }
`
