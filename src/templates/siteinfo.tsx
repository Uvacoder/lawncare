import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-plugin-theme-ui/index'
import { Box, AnimatedBox, Button } from '../elements'
import { transparentize, readableColor } from 'polished'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import GridItem from '../components/grid-item'

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
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

const RaisedHeader = styled(Container)`
  padding: 30px 0;
  margin: -300px 10px 140px 10px;
  //box-shadow: 0 16px 16px 2px rgba(43,44,62, 0.14), 0 6px 30px 5px rgba(43,44,62, 0.12), 0 8px 10px 5px rgba(43,44,62, 0.2), 0 8px 10px 5px rgba(43,44,62, 0.2);
  box-shadow: 3px 3px 5px 0px rgb(47, 54, 68, 0.4);
  border-radius: 12px;
  z-index: 3;
  position: relative;
  background-color: ${theme.palette.primary.text};
  color: ${theme.palette.primary.background};
  display: flex
  flexDirection: column
  minWidth: 0;
  wordWrap: break-word;
  fontSize: 1.5rem ;
  transition: all 300ms linear ; 
`
const Title = styled(GridItem)`
  grid-area: title;
  color: ${theme.palette.primary.active}; 

`

const PageTitle = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  'lawns matter'
  'title'   ;
  padding: 1rem ;
  background-color: ${theme.palette.primary.background};
  text-align: center;
  margin: -80px 15% 20px 5%;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  PageTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
` 

const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${props => props.theme.fontSizes[1]};
  text-transform: uppercase;
`
const Lawns = styled(GridItem)`
  grid-area: lawns;
  color: ${theme.palette.primary.active}; 
  text-transform: lowercase;
 `

const Matter = styled(GridItem)`
  grid-area: matter;
  color: ${theme.palette.primary.text}; 
  text-transform: lowercase;
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

type SiteInfoProps = {
  data: {
        id: string
        frontmatter: {
          templateKey: string
          slug: string
          dataType: string
          value: string 
      }
  }
  file: ChildImageSharp
} 
const SiteInfo = ({ data }) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const titleAnimation = useSpring({ config: config.slow, delay: 30, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 60, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 80, from: { opacity: 0 }, to: { opacity: 1 } })
  const imageData = <Img>{data.file.childImageSharp.fluid}</Img>
  return (

    <Layout color={theme.palette.primary.main}>
      <SEO
        pathname={`${data.markdownRemark.frontmatter.slug}`} 
        title={`${data.markdownRemark.frontmatter.slug} | lawnsmatter.co.uk`}
        desc="Site Information"
        node={data.markdownRemark.frontmatter.slug}
        banner={data.file.childImageSharp.fluid}
        individual
      />
      {/* <Content bg={theme.palette.primary.main} py={10}>
        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>{data.markdownRemark.frontmatter.slug}</animated.h1>
  
        <Img fluid={data.file.childImageSharp.fluid} />
        </PBox>
      </Content> */}
     
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
                            backgroundColor: theme.palette.primary.background,
                            color: theme.palette.primary.text,
                            lineHeight: '1',
                            padding: '0.3em',
                  
                        }}>

        <Category style={categoryAnimation} color={theme.palette.primary.text}> 
        <Lawns>lawns</Lawns> <Matter>matter</Matter>
        <br />
        <Title color={theme.palette.primary.active}>{data.markdownRemark.frontmatter.title}</Title></Category></h2>
        </Container>
        </PageTitle>
          
      <h4>  <Description style={descAnimation}>
         {data.markdownRemark.frontmatter.slug}
        </Description></h4> 
        
     
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <Link to="/contactus">
        <Button variant="contained" color={theme.palette.primary.active} margin="1rem" py={4} px={8}>
          Contact Us
        </Button>
        </Link>
        {/* <Link to="/page">
        <Button color={theme.palette.primary.active} variant="outlined" py={4} px={8}>
          Other Pages
        </Button>
        </Link>
        <Link to="/">
        <Button color={theme.palette.primary.active} variant="contained" py={4} px={8}>
          Return to main menu
        </Button>
        </Link> */}
      </PBox>
      
      </RaisedHeader>
      </Container>  
      </Container>
   

      <PBox py={10} px={[6, 6, 8, 10]}>
        <Category style={categoryAnimation}>{data.markdownRemark.frontmatter.templateKey}</Category>
        <Description style={descAnimation}>
        <h2> {data.markdownRemark.frontmatter.slug}</h2>
        </Description>
      </PBox>
      <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
        <h2></h2>
        <Link to="/contactus">
        <PButton color={theme.palette.primary.active} py={4} px={8}>
          Contact Us
        </PButton>
        </Link>
      </PBox>
    </Layout>
  )
}


export default SiteInfo

export const query = graphql`
query SiteInfo ($id: String!) {
  markdownRemark(id: { eq: $id }) {
    frontmatter {
      slug
      tags
      templateKey
    }
    id
  }
  file(relativePath: {regex: "/petar-tonchev-c-5-QE5kBYk-unsplash/"}) {
    childImageSharp {
      fluid(quality: 95, maxWidth: 300) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}



`