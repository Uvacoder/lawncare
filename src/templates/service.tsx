import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { transparentize, readableColor } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import Layout from '../components/layout'
import { Box, AnimatedBox, Button } from '../elements'
import SEO from '../components/SEO'
import theme from '../gatsby-plugin-theme-ui/index'

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`

const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, props.bg)};

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${props => props.theme.space[10]};

    @media (max-width: ${props => props.theme.breakpoints[3]}) {
      margin-bottom: ${props => props.theme.space[8]};
    }
  }
`

const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${props => props.theme.fontSizes[1]};
  text-transform: uppercase;
`


const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`

type PageProps = {
  data: {
    service: {
      title: string
      category: string
      slug: string
      templateKey: string
      tags: string
      cover_alt: string
      cover: ChildImageSharp
    }
  }
}

const ServiceTemplate: React.FunctionComponent<PageProps> = ({ data: { service } }) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })

  const titleAnimation = useSpring({ config: config.slow, delay: 30, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 80, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout color={theme.colors.primary}>
      <SEO
        pathname={service.frontmatter.slug}
        title={`${service.frontmatter.title} | lawnsmatter.co.uk`}
/*         node={service.frontmatter.parent}
        banner={service.frontmatter.cover.childImageSharp.resize.src} */
        individual
      />
      <Content bg={theme.colors.primary} py={10}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>{service.frontmatter.title}</animated.h1>
          {images.nodes.map(image => (
            <Img alt={service.frontmatter.cover_alt} key={service.frontmatter.cover.childImageSharp.resize.src} fluid={service.frontmatter.cover.childImageSharp.resize} />
          ))}
        </PBox>
      </Content>      
      <PBox py={10} px={[6, 6, 8, 10]}>
        <Category style={categoryAnimation}>{service.frontmatter.category}</Category>
      </PBox>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h2>Would you like a free lawn assessment and quote for our services?</h2>
        <Link to="/contactus">
        <PButton color={theme.colors.primary} py={4} px={8}>
          Contact Us
        </PButton>
        </Link>
      </PBox>
    </Layout>
  )
}

export default ServiceTemplate

export const query = graphql`
  query ServiceTemplate($slug: String!) {
  service: markdownRemark(id: {eq: $slug}) {
      frontmatter {
        title
        category
        tags
        cover {
          childImageSharp {
            sizes(maxWidth: 1200, quality: 80) {
              src
            }
          }
        }
        cover_alt
        slug
        templateKey
      }
    }
  }
`
