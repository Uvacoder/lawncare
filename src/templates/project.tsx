import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { ChildImageSharp } from '../types'
import { Box, AnimatedBox, Button } from '../elements'
import theme from '../gatsby-plugin-theme-ui/index'
import { transparentize, readableColor } from 'polished'
import GridItem from '../components/grid-item'


type PageProps = {
  data: {
    project: {
      id: string
      frontmatter: {
        title: string
        before: ChildImageSharp
        before_alt: string
        cover: ChildImageSharp
        cover_alt: string
        testimonials: {
          author: string
          quote: string
        }
        slug: string
        templateKey: string
      }
    }
  }
}

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

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 50vw;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 60vw;
  }
`

const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`
const ProjectTemplate: React.FunctionComponent<PageProps> = ({ data: { project } }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const titleAnimation = useSpring({ config: config.slow, delay: 300, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout color={theme.colors.primary}>
      <SEO
        pathname={project.frontmatter.slug}
        title={`${project.frontmatter.title} | lawnsmatter.co.uk`}
        desc={project.frontmatter.title}
        banner={project.frontmatter.cover.childImageSharp.fluid}
        individual
      />    
       
       <Area style={pageAnimation}>

          <GridItem key={project.slug} to={project.slug} aria-label={`View project "${project.title}"`}>
    
            <Img fluid={project.frontmatter.cover.childImageSharp.fluid} />
            <span>{project.frontmatter.title}</span>
          </GridItem>

      </Area>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h2>Would you like a free lawn assessment and quote for our services?</h2>
        <Link to="/contactus">
        <PButton color={theme.colors.active} py={4} px={8}>
          Contact Us
        </PButton>
        </Link>
      </PBox>
    </Layout>
  )
}
export default ProjectTemplate


export const query = graphql`  
 query ProjectTemplate($id: String!) {
  project: markdownRemark(id: {eq: $id}) {
    id
    frontmatter {
      title
      category
      before_alt
      tags
      cover {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cover_alt
      before {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      before_alt
      testimonials {
        author
        quote
      }
      slug
      templateKey
    }
  }
}
`
