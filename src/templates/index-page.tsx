import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogIndex from '../components/BlogIndex'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'
import GlobalStyles from '../styles/globalStyle'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Title from '../styles/titleStyle'
import Content from '../styles/contentStyle'
import Description from  '../styles/descriptionStyle'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

export const IndexPageTemplate = ({
  featuredimage,
  title,
  heading,
  slug,
  html,
}) => (

  <div>
 
    <GlobalStyles />
    <SEO />
    <Helmet title={title} />
     <Content bg={theme.palette.primary.main} >
      
        <BackgroundImage
 
          fluid={featuredimage.childImageSharp.fluid}
          style={{
          backgroundAttachment: 'fixed',     
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          }}
        >   
          <Container
        style={{ height: '800px',  }}
        />

        </BackgroundImage>

        <Container>
          <Container>
            
            <RaisedHeader >
                        <PageTitle >
                <Title>Professional Lawn Care</Title>
                      </PageTitle>
                      <Description>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                            <h3 >
                              About Us
                            </h3>
                            
                      <BlogIndex />
                      </Description>
                </RaisedHeader>
      
                </Container>  
        </Container>
      </Content>

  </div>

)

IndexPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.array,
  }),

}

const IndexPage = ({ data }) => {
  const { indexdata } = data.markdownRemark
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        heading={data.markdownRemark.frontmatter.heading}
        html={data.markdownRemark.html}
         />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
  }),
  site: PropTypes.shape({
    siteMetadata: PropTypes.object,
}),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
   markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      html
      frontmatter {
      title
      featuredimage {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slug
      heading
    }
  }
allMarkdownRemark (filter: {frontmatter: {templateKey: {eq: "post"}}}, sort: {order: ASC, fields: frontmatter___sortorder}) { 
  edges {
      node {
        excerpt(pruneLength: 400)
        id
        posts:   frontmatter {
          slug
          title
          templateKey
          featured
          featuredimage {
            childImageSharp {
              fluid(quality: 95, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
  site {
    siteMetadata {
      serviceName
      title
    }
  }
}


  `