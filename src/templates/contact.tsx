import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { transparentize, readableColor } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import Layout from '../components/layout'
import { Box, AnimatedBox, Button } from '../elements'
import SEO from '../components/SEO'

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

const Description = styled(animated.div)`
  max-width: 960px;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
`

const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`

type PageProps = {
  data: {
    contact: {
      title_detail: string
      color: string
      category: string
      desc: string
      slug: string
      image_credit: string
      parent: {
        modifiedTime: string
        birthTime: string
      }
      cover: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
    images: {
      nodes: {
        name: string
        childImageSharp: {
          fluid: {
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
            base64: string
            tracedSVG: string
            srcWebp: string
            srcSetWebp: string
          }
        }
      }[]
    }
  }
}

const Contact: React.FunctionComponent<PageProps> = ({ data: { contact, images } }) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })

  const titleAnimation = useSpring({ config: config.slow, delay: 30, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 60, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 80, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout color={Contact.color}>
      <SEO
        pathname={contact.slug}
        title={`${contact.title_detail} | gappsapps.co.uk`}
        desc={contact.desc}
        node={contact.parent}
        banner={contact.cover.childImageSharp.resize.src}
        individual
      />
      <Content bg={contact.color} py={10}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>{contact.title_detail}</animated.h1>
          {images.nodes.map(image => (
            <Img alt={image.name} key={image.childImageSharp.fluid.src} fluid={image.childImageSharp.fluid} />
          ))}
        </PBox>
      </Content>      
      <PBox py={10} px={[6, 6, 8, 10]}>
        <Category style={categoryAnimation}>{contact.category}</Category>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: contact.desc }} />
        </Description>
      </PBox>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h2>Want to start your own project?</h2>
        <PButton color={contact.color} py={4} px={8}>
          Contact Us
        </PButton>
      </PBox>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query ContactTemplate($slug: String!, $images: String!) {
    contact: contactYaml(slug: { eq: $slug }) {
      title_detail
      color
      category
      desc
      slug
      image_credit
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
      cover {
        childImageSharp {
          resize(width: 1200, height: 675, quality: 80) {
            src
          }
        }
      }
    }
    images: allFile(filter: { relativePath: { regex: $images } }, sort: { fields: name, order: ASC }) {
      nodes {
        name
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
