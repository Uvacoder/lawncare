import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ProjectIndex extends React.Component {
  render() {
    const { data } = this.props
    const { edges: projects } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {projects &&
          projects.map(({ node: project }) => (
            <div className="is-parent column is-6" key={project.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  project.frontmatter.featured ? 'is-featured' : ''
                }`}
              >
                <header>
                  {project.frontmatter.cover ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: project.frontmatter.cover,
                          alt: `featured image thumbnail for service ${project.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="has-text-weight-semibold is-size-3">
                  <span> &bull; </span>
                    <Link
                      className="has-text-weight-semibold is-size-3"
                      to={project.fields.slug}
                    >
                      {project.frontmatter.title}
                    </Link>
                    <span className="subtitle is-size-5 is-block">
                      {project.frontmatter.date}
                    </span>
                  </p>
                </header>
                <h3 className="has-text-weight-semibold is-size-5">
                  {project.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={project.fields.slug}>
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

ProjectIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectIndexQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}}}) {
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
                  featured
                  cover {
                    childImageSharp {
                      fluid(maxWidth: 400, quality: 80) {
                        originalImg
                      }
                    }
                  }
                }
              }
            }
          }
        }
    `}
    render={(data, count) => <ProjectIndex data={data} count={count} />}
  />
)
