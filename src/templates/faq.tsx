import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import { Box, AnimatedBox } from '../elements'
import { transparentize, readableColor } from 'polished'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import GridItem from '../components/grid-item'
import ImageCarousel from '../components/imageCarousel'
import RaisedHeader from '../styles/raisedHeaderStyle'

const PBox = styled(AnimatedBox)`
  
  margin: 30 auto;
`



const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, theme.palette.primary.main)};

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${theme.typography.spacing};

    [theme.breakpoints.down('lg')]: {
      margin-bottom: ${theme.typography.spacing};
    }
  }
`

const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  text-transform: none;
`


const PageTitle = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  'TitlePart1 titlepart2'
  'title'   ;
  padding: 1rem ;
  background-color: ${theme.palette.primary.main};
  text-align: center;
  margin: -80px 15% 20px 15%;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  PageTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },



` 

const Title = styled(GridItem)`
  grid-area: title;
  color: ${theme.palette.secondary.main}; 
  text-transform: none;
  color: ${theme.palette.primary.contrastText}; 
  font-size: ${theme.typography.h6.fontSize};

`


const Description = styled(animated.div)`
  max-width: 960px;
  padding: 30px;
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
        html: markdown
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


  const FaqPage = ({ data }) => {
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
      <Helmet title={`${data.markdownRemark.frontmatter.title} `} />
      <Content bg={theme.palette.primary.main} py={10}>
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
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        </Container>  
        </BackgroundImage>



        <Container>
 
 <Container>

 <RaisedHeader  >
 <PageTitle   style={{
      display: 'flex',
      width: '70%' ,
      lineHeight: '1',
      justifyContent: 'space-around',
      alignItems: 'left',
      flexDirection: 'column',}}>
 <Container > 



<Category style={categoryAnimation} color={theme.palette.primary.contrastText}> 
 {/* <TitlePart1>customer</TitlePart1> <TitlePart2>Faq</TitlePart2>
 <br /> */}
 <Title color={theme.palette.secondary.main }>{data.markdownRemark.frontmatter.title}</Title></Category>
</Container>
 </PageTitle>
   

    <Description style={descAnimation}>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Description> 
      
   
    <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
      <Link to="/contactus">
      <Button variant="contained" color={theme.palette.secondary.main} margin="1rem" py={4} px={8}>
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


export default FaqPage

export const query = graphql`
query FaqPage ($id: String!) {
   markdownRemark(id: { eq: $id }) {
   excerpt(pruneLength: 400)
    html
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
