import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
   query ={graphql`
    query ProjectPageQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}}}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
       }
    }
  }
  `
  render={data => (

      <h1>{data.edges.nodes.frontmatter.slug}</h1>

  )}
  />
);