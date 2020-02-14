import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class SectionIndex extends React.Component {
  render() {
    const { data } = this.props
    const { edges: sections } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {sections &&
          sections.map(({ node: section }) => (
            <div className="is-parent column is-6" key={section.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  section.frontmatter.featured ? 'is-featured' : ''
                }`}
              >
                <header>
                  {section.frontmatter.cover ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: section.frontmatter.cover,
                          alt: `featured image thumbnail for service ${section.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="has-text-weight-semibold is-size-3">
                  <span> &bull; </span>
                    <Link
                      className="has-text-weight-semibold is-size-3"
                      to={section.fields.slug}
                    >
                      {section.frontmatter.title}
                    </Link>
                    <span className="subtitle is-size-5 is-block">
                      {section.frontmatter.date}
                    </span>
                  </p>
                </header>
                <h3 className="has-text-weight-semibold is-size-5">
                  {section.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={section.fields.slug}>
                    Keep Reading →
                  </Link>
                </h3>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

SectionIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SectionIndexQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "section"}}}) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  cover {
                    childImageSharp {
                      fluid(maxWidth: 400, quality: 80) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
    `}
    render={(data, count) => <SectionIndex data={data} count={count} />}
  />
)
