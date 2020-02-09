import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'
import theme from '../../config/theme'

type PageProps = {
  data: {
    software: {
      nodes: {
        title: string
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

const Software: React.FunctionComponent<PageProps> = ({ data: { software } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color={theme.colors.primary}>
      <SEO title="Software | gappsapps.co.uk" />
      <Area style={pageAnimation}>
        {software.nodes.map(software => (
          <GridItem key={software.slug} to={software.slug} aria-label={`View software "${software.title}"`}>
            <Img fluid={software.cover.childImageSharp.fluid} />
            <span>{software.title}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}

export default Software

export const query = graphql`
  query Software {
    software: allSoftwareYaml {
      nodes {
        title
        slug
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
`
