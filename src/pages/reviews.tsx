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
    reviews: {
      nodes: {
        title: string
        slug: string
        featuredimage: ChildImageSharp
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

const Reviews: React.FunctionComponent<PageProps> = ({ data: { reviews } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color={theme.palette.primary.main}>
      <SEO title="Website development | lawnsmatter.co.uk" />
      <Area style={pageAnimation}>
        {reviews.nodes.map(reviews => (
          <GridItem key={reviews.slug} to={reviews.slug} aria-label={`View reviews "${reviews.title}"`}>
            <Img fluid={reviews.featuredimage.childImageSharp.fluid} />
            <span>{reviews.title}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}

export default Reviews

export const query = graphql`
  query Reviews {
    reviews: allReviewsYaml {
      nodes {
        title
        slug
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
`
