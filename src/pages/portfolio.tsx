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
    portfolio: {
      nodes: {
        title: string
        slug: string
        cover: string
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

const Portfolio: React.FunctionComponent<PageProps> = ({ data: { portfolio } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color={theme.colors.primary}>
      <SEO title="Portfolio | lawnsmatter.co.uk" />
      <Area style={pageAnimation}>
        {portfolio.nodes.map(portfolio => (
          <GridItem key={portfolio.slug} to={portfolio.slug} aria-label={`View portfolio "${portfolio.title}"`}>
            <Img fluid={portfolio.cover} />
            <span>{portfolio.title}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}

export default Portfolio

export const query = graphql`
  query Portfolio {
    portfolio: allPortfolioYaml {
      nodes {
        title
        slug
        cover {
          id
        } 
      }
    }
  }
`
