import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'
// import { useColorMode } from 'theme-ui'
// import theme from '../../config/theme'
import theme from '../gatsby-plugin-theme-ui/index'

type PageProps = {
  data: {
    project: {
      nodes: {
        title: string
        templateKey: string 
        slug: string
        cover: ChildImageSharp
      }[]
    }
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50vw;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`

const Project: React.FunctionComponent<PageProps> = ({ data: { project } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

    return (
      <div className="columns is-multiline">
            <div className="is-parent column is-6" key={project.frontmatter.slug}>
                <header>
                  {project.frontmatter.cover.childImageSharp ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage 
                        imageInfo={{
                          image: project.frontmatter.cover.childImageSharp,
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
      </div>
    )
  }

  export default Project

export const query = graphql`
  query ProjectPageQuery {
    project:  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}}}) {
        edges {
          node {
            excerpt(pruneLength: 400)
            frontmatter {
              slug
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
  `