import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import palette from '../gatsby-plugin-theme-ui/palette'
import { Box, AnimatedBox } from '../elements'
import { transparentize, readableColor } from 'polished'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import GridItem from '../components/grid-item'
import HorizontalLogo from '../components/horizontalLogo'
import ImageCarousel from '../components/imageCarousel'
import RaisedHeader from '../styles/raisedHeaderStyle'

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
  color: ${theme.palette.primary.active};
`


const LandingTitle = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  'titlepart1 titlepart2'
  'title'   ;
  padding: 1rem ;
  background-color: ${theme.palette.primary.background};
  text-align: center;
  margin: -80px 25% 20px 25%;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  LandingTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },



` 
const TitlePart1 = styled(GridItem)`
  grid-area: titlepart1;
  color: ${theme.palette.primary.active}; 
  text-transform: none;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes[5]};
 `

const TitlePart2 = styled(GridItem)`
  grid-area: titlepart2;
  color: ${theme.palette.primary.text}; 
  text-transform: none;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes[5]};
 `

const HorizontalImg = styled(Img)`
  grid-area: logo;

`
const Title = styled(GridItem)`
  grid-area: title;
  color: ${theme.palette.primary.active}; 
  text-transform: none;
  font-weight: 400;
  color: ${theme.palette.primary.text}; 
  font-size: ${props => props.theme.fontSizes[1]};

`

const Description = styled(animated.div)`
  
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
  margin: 30px;
`

const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`

type LandingProps = {
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


  const Landing = ({ data }) => {
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
    <div >
    <Layout >
      <SEO
        pathname={data.markdownRemark.frontmatter.slug}
        title={`${data.markdownRemark.frontmatter.title} | Lawns Matter`}
        desc={data.markdownRemark.excerpt}
        node={data.markdownRemark.frontmatter.slug}
        banner={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
        individual
      />
         <Helmet title={`${data.markdownRemark.frontmatter.title} `} />
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
        {/* <ImageCarousel /> */}
    
          <Container
        style={{
          display: 'flex',
          height: '700px',
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
 
   <RaisedHeader  >
   <LandingTitle   style={{
        display: 'flex',
        width: '70%' ,
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',}}>
   <Container > 
 
   <h2 className="landingTitle"
                       style={{
                       boxShadow: 'transparent',
                       borderRadius: '0px',
                       backgroundColor: theme.palette.primary.background,
                       color: theme.palette.primary.text,
                       lineHeight: '1',
                       padding: '0.3em',
            
                   }}>
 
 <Category style={categoryAnimation} color={theme.palette.primary.text}> 
   <TitlePart1>lawns</TitlePart1> <TitlePart2>matter</TitlePart2>
   <br />
   <Title color={theme.palette.primary.active}>{data.markdownRemark.frontmatter.title}</Title></Category></h2>
  </Container>
   </LandingTitle>
     

      <h4>  <Description style={descAnimation}>
         {data.markdownRemark.internal.content}
        </Description></h4> 
        
     
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <Link to="/contactus">
        <Button variant="contained" color={theme.palette.primary.active} margin="1rem" py={4} px={8}>
          Contact Us
        </Button>
        </Link>
      </PBox>
      
      </RaisedHeader>
      </Container>  
      </Container>
      </Content>
    </Layout>
    </div>
  )
}


export default Landing

export const query = graphql`
query Landing ($id: String!) {
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
