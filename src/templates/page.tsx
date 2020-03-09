import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-plugin-theme-ui/index'
import palette from '../gatsby-plugin-theme-ui/palette'
import { Box, AnimatedBox } from '../elements'
import { transparentize, readableColor } from 'polished'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import GridItem from '../components/grid-item'
import HorizontalLogo from '../components/horizontalLogo'


const PBox = styled(AnimatedBox)`
  
  margin: 30 auto;
`



const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, palette.palette.primary.background)};
  

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
  color: ${palette.palette.primary.active};
`
const RaisedHeader = styled(Container)`
  padding: 30px 0;
  margin: -300px 10px 140px 10px;
  //box-shadow: 0 16px 16px 2px rgba(43,44,62, 0.14), 0 6px 30px 5px rgba(43,44,62, 0.12), 0 8px 10px 5px rgba(43,44,62, 0.2), 0 8px 10px 5px rgba(43,44,62, 0.2);
  box-shadow: 3px 3px 5px 0px rgb(47, 54, 68, 0.4);
  border-radius: 12px;
  z-index: 3;
  position: relative;
  background-color: ${palette.palette.primary.text};
  color: ${palette.palette.primary.background};
  display: flex
  flexDirection: column
  minWidth: 0;
  wordWrap: break-word;
  fontSize: 1.5rem ;
  transition: all 300ms linear ; 
`

const PageTitle = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  'lawns matter'
  'title'   ;
  padding: 1rem ;
  background-color: ${palette.palette.primary.background};
  text-align: center;
  margin: -80px 25% 20px 25%;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  PageTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },



` 
const Lawns = styled(GridItem)`
  grid-area: lawns;
  color: ${palette.palette.primary.active}; 
  text-transform: lowercase;
 `

const Matter = styled(GridItem)`
  grid-area: matter;
  color: ${palette.palette.primary.text}; 
  text-transform: lowercase;
 `

const HorizontalImg = styled(Img)`
  grid-area: logo;

`
const Title = styled(GridItem)`
  grid-area: title;
  color: ${palette.palette.primary.active}; 

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


  const Page = ({ data }) => {
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
        title={`${data.markdownRemark.frontmatter.title} | lawnsmatter.co.uk`}
        desc={data.markdownRemark.excerpt}
        node={data.markdownRemark.frontmatter.slug}
        banner={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
        individual
      />
  
         <Content bg={palette.palette.primary.main} >
      
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
 
   <RaisedHeader    style={{
        display: 'flex',
        width: '90%' ,
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',}}>
   <PageTitle   style={{
        display: 'flex',
        width: '70%' ,
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',}}>
   <Container > 
 
   <h2 className="pageTitle"
                       style={{
                       boxShadow: 'transparent',
                       borderRadius: '0px',
                       backgroundColor: palette.palette.primary.background,
                       color: palette.palette.primary.text,
                       lineHeight: '1',
                       padding: '0.3em',
            
                   }}>
 
 <Category style={categoryAnimation} color={palette.palette.primary.text}> 
   <Lawns>lawns</Lawns> <Matter>matter</Matter>
   <br />
   <Title color={palette.palette.primary.active}>{data.markdownRemark.frontmatter.title}</Title></Category></h2>
  </Container>
   </PageTitle>
     

      <h4>  <Description style={descAnimation}>
         {data.markdownRemark.internal.content}
        </Description></h4> 
        
     
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <Link to="/contactus">
        <Button variant="contained" color={palette.palette.primary.active} margin="1rem" py={4} px={8}>
          Contact Us
        </Button>
        </Link>
        {/* <Link to="/page">
        <Button color={palette.palette.primary.active} variant="outlined" py={4} px={8}>
          Other Pages
        </Button>
        </Link>
        <Link to="/">
        <Button color={palette.palette.primary.active} variant="contained" py={4} px={8}>
          Return to main menu
        </Button>
        </Link> */}
      </PBox>
      
      </RaisedHeader>
      </Container>  
      </Container>
      </Content>
    </Layout>
    </div>
  )
}


export default Page

export const query = graphql`
query Page ($id: String!) {
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
