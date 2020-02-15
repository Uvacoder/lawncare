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
    projects: {
      edges: {
        node: {
          frontmatter: {
            title: string
            slug: string
            cover: ChildImageSharp
          }[]
        }
      }
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

const Portfolio: React.FunctionComponent<PageProps> = ({ data: { projects } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color={theme.colors.primary}>
      <SEO title="Portfolio | lawnsmatter.co.uk" />
      <Area style={pageAnimation}>
        {projects.edges.node.frontmatter.map(project => (
          <GridItem key={project.slug} to={project.slug} aria-label={`View project "${project.title}"`}>
            <Img fluid={project.cover.childImageSharp} />
            <span>{project.title}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}

export default Portfolio

export const query = graphql`
  query Portfolio {
    projects: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}}}) {
      edges {
        node {
          frontmatter {
            slug
            title
            cover {
              childImageSharp {
                fluid(quality: 95, maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
