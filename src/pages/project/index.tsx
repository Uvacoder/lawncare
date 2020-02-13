import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

const ProjectIndexPage = ({
  data: {
    allMarkdownRemark: { slug },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <section className="section">
      <Helmet title={`Projects | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-2 is-bold-light">Tags</h1>
            <ul className="taglist">
              {slug.map(project => (
                <li key={slug}>
                  <Link to={`/${kebabCase(slug)}`}>
                    {slug} 
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default ProjectIndexPage

export const projectIndexPageQuery = graphql`
query ProjectIndexQuery {
  site {
    siteMetadata {
      title
    }
  }
slug: allMarkdownRemark(limit: 1000, filter: {frontmatter: {templateKey: {eq: "project"}}}) {
    edges {
      node {
        frontmatter {
          slug
        }
      }
    }
  }
}
`
