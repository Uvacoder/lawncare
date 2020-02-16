import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { transparentize, readableColor } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import Layout from '../components/layout'
import { Box, AnimatedBox, Button } from '../elements'
import SEO from '../components/SEO'
// import { ChildImageSharp } from '../types'


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
    portfolio: {
      title: string
      title_detail: string
      color: string
      category: string
      desc: string
      slug: string
      before_alt: string
      cover_alt: string
      cover: {
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
      }
      before: {
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
      }
    }
  }
}

const Portfolio: React.FunctionComponent<PageProps> = ({ data: { portfolio } }) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })

  const titleAnimation = useSpring({ config: config.slow, delay: 30, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 60, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 80, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout color={portfolio.color}>
      <SEO
        pathname={portfolio.slug}
        title={`${portfolio.title_detail} | lawnsmatter.co.uk`}
        desc={portfolio.desc}
        banner={portfolio.cover.childImageSharp.fluid.srcWebp}
        individual
      />
      <Content bg={portfolio.color} py={10}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>portfolio.title</animated.h1>
 
            <Img alt={portfolio.cover_alt} key={portfolio.cover.childImageSharp.fluid.src} fluid={portfolio.cover.childImageSharp.fluid} />
  
        </PBox>
      </Content>
      <PBox py={10} px={[6, 6, 8, 10]}>
        <Category style={categoryAnimation}>{portfolio.category}</Category>

        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: portfolio.desc }} />
        </Description>
      </PBox>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h2>Want to start your own portfolio?</h2>
        <Link to="/contactus">
        <PButton color={portfolio.color} py={4} px={8}>
          Contact Us
        </PButton>
        </Link>
      </PBox>
    </Layout>
  )
}

export default Portfolio

export const query = graphql`
  query PortfolioTemplate($slug: String) {
    portfolio: portfolioYaml(slug: { eq: $slug }) {
      title_detail
      title
      color
      category
      desc
      slug
      before_alt
      cover_alt
      before {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cover {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
  
`
