import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-plugin-theme-ui/index'
import { Box, AnimatedBox } from '../elements'
import { transparentize, readableColor } from 'polished'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'

const PBox = styled(AnimatedBox)`
  
  margin: 30 auto;
`



const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, theme.palette.primary.background)};
  

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
  text-transform: capitalize;
  color: ${props => props.theme.palette.primary.active};
`
const RaisedContainer = styled(Container)`
  padding: 30px 0;
  margin: -300px;
  box-shadow: 0 16px 16px 2px rgba(43,44,62, 0.14), 0 6px 30px 5px rgba(43,44,62, 0.12), 0 8px 10px 5px rgba(43,44,62, 0.2), 0 8px 10px 5px rgba(43,44,62, 0.2);
  border-radius: 6px;
  z-index: 3;
  position: relative;
  background-color: ${props => props.theme.palette.primary.main};
  display: flex
  flexDirection: column
  minWidth: 0;
  wordWrap: break-word;
  fontSize: 1.5rem ;
  transition: all 300ms linear ; 

  `
const Description = styled(animated.div)`
  
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
        id: string
        excerpt: string
        internal: {
          content: markdown 
        }
        frontmatter: {
          title: string
          templateKey: string
          featured: boolean
          slug: string
          featuredimage_alt: string
          tags: string
          featuredimage: ChildImageSharp
          }
        }
  }


  const AlternatePage = ({ data }) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const titleAnimation = useSpring({ config: config.slow, delay: 30, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 60, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 80, from: { opacity: 0 }, to: { opacity: 1 } })
  const imageData = data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid
  return (
    <div>
    <Layout color={theme.palette.primary.main}>
      <SEO
        pathname={data.markdownRemark.frontmatter.slug}
        title={`${data.markdownRemark.frontmatter.title} | lawnsmatter.co.uk`}
        desc={data.markdownRemark.excerpt}
        node={data.markdownRemark.frontmatter.slug}
        banner={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
        individual
      />
         <Content bg={theme.palette.primary.main} >
      
        <BackgroundImage
 
          fluid={imageData}
          style={{
          backgroundAttachment: 'fixed',     
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          }}
      
          // backgroundSize="cover"          

        >   
 
    
          <Container
        style={{
          display: 'flex',
          height: '800px',
          width: '70%' ,
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        </Container>  
   </BackgroundImage>

   <Container>
   <Container>
   <RaisedContainer>
   
 
   
      
      
  
        {/* <animated.h1 style={titleAnimation}></animated.h1> */}
      
 
      
   
        <Category style={categoryAnimation}> <h3 >{data.markdownRemark.frontmatter.title}</h3></Category>
        
          

        <Description style={descAnimation}>
         {data.markdownRemark.internal.content}
        </Description>
        
     
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <Link to="/contactus">
        <Button color={theme.palette.primary.active} margin="1rem" variant="contained"py={4} px={8}>
          Contact Us
        </Button>
        </Link>
        <Link to="/page">
        <Button color={theme.palette.primary.active} variant="outlined" py={4} px={8}>
          Other Pages
        </Button>
        </Link>
        <Link to="/">
        <Button color={theme.palette.primary.active} variant="contained" py={4} px={8}>
          Return to main menu
        </Button>
        </Link>
      </PBox>
      
      </RaisedContainer>
      </Container>  
      </Container>
      </Content>
    </Layout>
    </div>
  )
}


export default AlternatePage

export const query = graphql`
query AlternatePage ($id: String!) {
   markdownRemark(id: { eq: $id }) {
   excerpt(pruneLength: 400)
   internal {
     content
   }
    frontmatter {
      slug
      title
      templateKey
      tags
      featuredimage {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      featuredimage_alt
      featured
    }
    id
  }
}


`
