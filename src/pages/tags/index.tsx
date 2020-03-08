import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-2 is-bold-light">Tags</h1>
            <ul className="taglist">
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
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

export default TagsPage

export const tagPageQuery = graphql`
query TagsQuery ($menu: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $menu}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredimage {
              childImageSharp {
                fluid(maxHeight: 600, maxWidth: 600, quality: 80) {
                  src
                }
              }
            }
            menu
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`
