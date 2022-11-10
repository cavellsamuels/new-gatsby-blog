import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const BlogLink = styled(Link)`
  text-decoration: none
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1> Cavell Thoughts </h1>
        <h4> {data.allMarkdownRemark.totalCount} </h4>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <BlogLink to={node.fields.slug}>
                <BlogTitle>
                  <span>
                    {node.frontmatter.title} - {node.frontmatter.date}
                  </span>
                </BlogTitle>
              </BlogLink>
              <p> {node.excerpt} </p>
            </div>
          ))
        }
      </div>
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
