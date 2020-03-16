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
    review: {
      edges: {
        node: {
          frontmatter: {
              title: string
              slug: string
              templateKey: string
              tags: string
              created_time: string
              has_rating: boolean
              has_review: boolean
              recommendation_type_positive: boolean
              featured: boolean
              featuredimage_alt: string
              featuredimage: ChildImageSharp
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

const Review: React.FunctionComponent<PageProps> = ({ data: { review } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color={theme.palette.primary.main}>
      <SEO title="Website development | lawnsmatter.co.uk" />
      <Area style={pageAnimation}>
        {review.edges.node.frontmatter.nodes.map(review => (
          <GridItem key={review.edges.node.frontmatter.slug} to={review.edges.node.frontmatter.slug} aria-label={`View review "${review.edges.node.frontmatter.title}"`}>
            <Img fluid={review.edges.node.frontmatter.featuredimage.childImageSharp.fluid} />
            <span>{review.edges.node.frontmatter.title}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}

export default Review

export const query = graphql`
  query Review {
    review: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
            templateKey
            tags
            created_time
            has_rating
            has_review
            recommendation_type_positive
            featured
            featuredimage_alt
            featuredimage {
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
