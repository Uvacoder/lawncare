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
import HeaderImage from '../components/HeaderImage'
import RaisedHeader from '../styles/raisedHeaderStyle'
import StarRatings from 'react-star-ratings';
import PBox from '../styles/pboxStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
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
          categories: string
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
        title={`${data.markdownRemark.frontmatter.title}`}
        desc={data.markdownRemark.excerpt}
        node={data.markdownRemark.frontmatter.slug}
        banner={imageData}
         />
      <Helmet title={`${data.markdownRemark.frontmatter.title} `} />
      <Content bg={theme.palette.primary.main} py={10}>
      <HeaderImage backgroundImage={imageData} />



        <Container>
 
 <Container>

 <RaisedHeader  >
 <PageTitle  >
 <Container > 

 <Title color={theme.palette.secondary.main }>
   {data.markdownRemark.frontmatter.title}
   </Title>

</Container>
 </PageTitle>
   
 <PBox style={{ textAlign: 'center' }} >
<Description style={descAnimation}>
  
    <StarRatings
        rating={data.markdownRemark.frontmatter.rating}
        starDimension="40px"
        starSpacing="15px"
        starRatedColor="FFD700"
      />
      </Description> 
      
   
   
      <Link to="/contactus">
      <Button  aria-label="Link to contact us form" variant="contained" color="primary" margin="1rem" py={4} px={8}>
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
      categories
      created_time
      rating
      recommendation_type_positive
      featuredimage {
        childImageSharp {
          fluid(quality:95 maxWidth: 1920)  {
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
