import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class PortfolioPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: projects } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {projects &&
          projects.map(({ node: project }) => (
            <div className="is-parent column is-6" key={project.id}>
                <header>
                  {project.frontmatter.cover ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage 
                        imageInfo={{
                          image: project.frontmatter.cover,
                          alt: `featured image thumbnail  ${project.frontmatter.cover_alt}`,
                        }}
                      />
                    </div>
                  ) : null}
                </header>
                <h3 className="has-text-weight-semibold is-size-5">
                    <Link
                      className="has-text-weight-semibold is-size-3"
                      to={project.fields.slug}
                    >
                      {project.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <br />
                    <br />
                  </h3>
                <h4 className="has-text is-size-6">
                  {project.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={project.fields.slug}>
                    Keep Reading →
                  </Link>
                </h4>
            </div>
          ))}
      </div>
    )
  }
}

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`query PortfolioPageQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "portfolio"}}}) {
        edges {
          node {
            id
            excerpt(pruneLength: 400)
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              cover {
                childImageSharp {
                  sizes(maxWidth: 1200, quality: 80) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
    
    `}
    render={(data, count) => <PortfolioPage data={data} count={count} />}
  />
)
