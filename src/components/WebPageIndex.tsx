import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class WebPageIndex extends React.Component {
  render() {
    const { data } = this.props
    const { edges: webpages } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {webpages &&
          webpages.map(({ node: webpage }) => (
            <div className="is-parent column is-6" key={webpage.id}>
              <article
                className={`blog-list-item tile is-child box notification `}
              >
                <header>
                  {webpage.frontmatter.cover ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage 
                        imageInfo={{
                          image: webpage.frontmatter.cover,
                          alt: `featured image thumbnail for webpage ${webpage.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                </header>
                <h3 className="has-text-weight-semibold is-size-5">
                    <Link
                      className="has-text-weight-semibold is-size-3"
                      to={webpage.frontmatter.slug}
                    >
                      {webpage.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <br />
                    <span className="has-text-weight-semibold is-size-5">
                      {webpage.frontmatter.date}
                    </span>
                    <br />
                    <br />
                  </h3>
                <h4 className="has-text is-size-6">
                  {webpage.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={webpage.frontmatter.slug}>
                    Keep Reading →
                  </Link>
                </h4>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

WebPageIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query WebPageIndexQuery {
      allMarkdownRemark(sort: {order: ASC, fields: frontmatter___sortorder}, filter: {frontmatter: {templateKey: {eq: "webpage"}}}) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            frontmatter {
              slug
              title
              templateKey
              cover {
                id
                childImageSharp {
                  resize(width: 1200, height: 675, quality: 80) {
                    src
                  }
                }
              }
              cover_alt
              tags
              sortorder
              description
            }
          }
        }
      }
    }    
    `}
    render={(data, count) => <WebPageIndex data={data} count={count} />}
  />
)
