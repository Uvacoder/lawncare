import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import FAQIndex from '../components/FAQIndex'
import { config, animated, useSpring } from 'react-spring'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import RaisedHeader from '../styles/raisedHeaderStyle'
import ParallaxHeader from '../components/ParallaxHeader'
import PBox from '../styles/pboxStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
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
        title={data.markdownRemark.frontmatter.title}
        desc={data.markdownRemark.excerpt}
        node={data.markdownRemark.frontmatter.slug}
        banner={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
        organisation
      />
      <Helmet title={`${data.markdownRemark.frontmatter.title} `} />
      <Content bg={theme.palette.primary.main} py={10}>
      <ParallaxHeader backgroundImage={imageData} />
        <Container>
 


    <RaisedHeader  >
            <PageTitle>{data.markdownRemark.frontmatter.title}</PageTitle>
   

              <Description style={descAnimation}>
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
               </Description> 
      
   
              <PBox style={{ textAlign: 'center' }} >
                <Link to="/contactus">
                <Button  aria-label="Link to contact us page" variant="contained" color="primary" margin="1rem" py={4} px={8}>
                  Contact Us
                </Button>
                </Link>
              </PBox>
    
    </RaisedHeader>  
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
      categories
      featuredimage {
        childImageSharp {
          fluid(quality:95 maxHeight: 1200, maxWidth: 1920)  {
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
