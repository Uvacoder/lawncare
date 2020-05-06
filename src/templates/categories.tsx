import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import CategoryIndex from '../components/CategoryIndex'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Description from  '../styles/descriptionStyle'
import HeaderImage from '../components/HeaderImage'
import Content from '../styles/contentStyle'
import Container from '@material-ui/core/Container'

export const CategoriesPageTemplate = ({
  featuredimage,
  title,
  slug,
  html,
}) => (
  <div>
      <SEO  pathname={slug}
    title={title}
    node={slug}
    banner={featuredimage}
    organisation
    />
    <Helmet title={title} />
     <Content bg={theme.palette.primary.main} >
     <HeaderImage backgroundImage={featuredimage.childImageSharp.fluid} />
        <Container>
            <RaisedHeader  >
            <PageTitle >{title}</PageTitle>
            <Description >
              <div dangerouslySetInnerHTML={{ __html: html }} />
            
                  <CategoryIndex />
              </Description>
            </RaisedHeader>
        </Container>
      </Content>
 </div>
)

CategoriesPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
}

const CategoriesPage = ({ data }) => {
 

  return (
    <Layout>
      <CategoriesPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
      />
    </Layout>
  )
}

CategoriesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CategoriesPage

export const pageQuery = graphql`

  query CategoriesPage {
    markdownRemark {
     html
     frontmatter {
       slug
       title
       templateKey
       categories
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
       title
     }
   }
 }
 
  
`
