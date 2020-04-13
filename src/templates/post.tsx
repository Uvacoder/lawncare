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


  const BlogPage = ({ data }) => {
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
          // width: '80%' ,
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
 <PageTitle  
  style={{
      display: 'flex',
      width: '70%' ,
      lineHeight: '1',
      justifyContent: 'space-around',
      alignItems: 'left',
      flexDirection: 'column',}}
      >
 <Container > 



<Category style={categoryAnimation} color={theme.palette.primary.contrastText}> 
 <Title color={theme.palette.secondary.main }>{data.markdownRemark.frontmatter.title}</Title>
 </Category>
</Container>
 </PageTitle>
   

    <Description style={descAnimation}>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Description>
      
   
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


export default BlogPage

export const query = graphql`
query BlogPage ($id: String!) {
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
      alt
      featured
    }
    id
  }
}


`
