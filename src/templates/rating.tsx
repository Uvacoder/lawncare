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
import StarRatings from 'react-star-ratings';
import PBox from '../styles/pboxStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import Category from '../styles/categoryStyle'
import PButton from '../styles/pbuttonStyle'
import Title from '../styles/titleStyle'
import Description from  '../styles/descriptionStyle'


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
          alt: string
          tags: string
          featuredimage: ChildImageSharp
          }
        }
  }


  const RatingPage = ({ data }) => {
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
          alignItems: 'left',
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
{/* 
 <h2 className="pageTitle"
                     style={{
                     boxShadow: 'transparent',
                     borderRadius: '0px',
                     backgroundColor: theme.palette.primary.main,
                     color: theme.palette.primary.contrastText,
                     lineHeight: '1',
                     padding: '0.3em',
          
                 }}> */}

{/* <Category style={categoryAnimation} color={theme.palette.primary.contrastText}>  */}
 {/* <TitlePart1>customer</TitlePart1> <TitlePart2>rating</TitlePart2>
 <br /> */}
 <Title color={theme.palette.secondary.main }>{data.markdownRemark.frontmatter.title}</Title>
 {/* </Category> */}
 {/* </h2> */}

</Container>
 </PageTitle>
   

    <h4>  <Description style={descAnimation}>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    <StarRatings
        rating={data.markdownRemark.frontmatter.rating}
        starDimension="40px"
        starSpacing="15px"
        starRatedColor="FFD700"
      />
      </Description></h4> 
      
   
    <PBox style={{ textAlign: 'center' }} py={10} px={[6, 6, 8, 10]}>
      <Link to="/contactus">
      <Button variant="contained" color="primary" margin="1rem" py={4} px={8}>
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


export default RatingPage

export const query = graphql`
query RatingPage ($id: String!) {
   markdownRemark(id: { eq: $id }) {
   excerpt(pruneLength: 400)
    html
    frontmatter {
      slug
      title
      templateKey
      tags
      created_time
      rating
      recommendation_type_positive
      featuredimage {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      alt
      featured
    }
    id
  }
  site {
    siteMetadata {
      siteUrl
      serviceName
      contactPoint {
        email
        name
      }
    }
  }
}



`
