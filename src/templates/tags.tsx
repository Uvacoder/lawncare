import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

class TagRoute extends React.Component {
  render() {
    const tagpages = this.props.data.allMarkdownRemark.edges
    const tagpageLinks = tagpages.map(tagpage => (
      <li key={tagpage.node.frontmatter.slug}>
        <Link to={tagpage.node.frontmatter.slug}>
          <h2 className="is-size-2">{tagpage.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} tagpage${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <div>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">{tagpageLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
