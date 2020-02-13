import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'

type PageProps = {
  data: {
    services: {
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

const Services: React.FunctionComponent<PageProps> = ({ data: { services } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout color="#2B2C3E">
      <SEO title="Services | lawnsmatter.co.uk" />
      <Area style={pageAnimation}>
        {services.nodes.map(services => (
          <GridItem key={services.slug} to={services.slug} aria-label={`View services "${services.title}"`}>
            <Img fluid={services.cover} />
            <span>{services.title}</span>
          </GridItem>
        ))}
      </Area>
    </Layout>
  )
}

export default Services

export const query = graphql`
  query Services {
    services: allServicesYaml {
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
