import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogIndex from '../components/BlogIndex'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import {  Flex } from '../elements'
import GlobalStyles from '../styles/globalStyle'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Description from  '../styles/descriptionStyle'
import HeaderImage from '../components/HeaderImage'
import HeaderImage from '../components/HeaderImage'

export const categoriesPageTemplate = ({
  featuredimage,
  title,
  slug,
  html,
}) => (
  <div>
    <GlobalStyles />
    <SEO />
    <Helmet title={title} />
     <Content bg={theme.palette.primary.main} >
     <HeaderImage backgroundImage={featuredimage.childImageSharp.fluid} />

        <Container>
          <Container>
            
 <RaisedHeader  >
            <PageTitle >{title}</PageTitle>
       
 
    <section className="section section--gradient">
      <div >
        {/* <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1"> */}
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
            
               <Description dangerouslySetInnerHTML={{ __html: html }} />
               
                  </div>
                </div>
                <Flex
              flexWrap="nowrap"
              flexDirection={['row', 'row', 'row', 'column']}
              alignItems={['center', 'center', 'center', 'flex-start']}
              justifyContent="space-between"
            >
    
               </Flex>


                <div className="columns">
                  <div >
                    {/* <Link className="btn" to="/products">
                      See all products
                    </Link> */}
                  </div>
                </div>
                <div className="column is-12">
       
                  <BlogIndex />
             
                </div>
              </div>
      </div>
    </section>
    </RaisedHeader>
 
    </Container>  
        </Container>
      </Content>

 </div>
)

categoriesPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.array,
  }),
}

const categoriesPage = ({ data }) => {
 

  return (
    <Layout>
      <categoriesPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
      />
    </Layout>
  )
}

categoriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default categoriesPage

export const pageQuery = graphql`
 
  query categoriesPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "categories"}}) {
      id
      html
      frontmatter {
        title
        templateKey
        slug
        featured
        categories
        featuredimage {
          childImageSharp {
            fluid(quality:95 maxHeight: 1200, maxWidth: 1920)  {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        alt
        sortorder
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
  
  
`
