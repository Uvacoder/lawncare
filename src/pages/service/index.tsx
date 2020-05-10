import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import ServiceCatalog from '../../components/ServiceCatalog'
import SEO from '../../components/SEO'
import theme from '../../gatsby-theme-material-ui-top-layout/theme'
import GlobalStyles from '../../styles/globalStyle'
import RaisedHeader from '../../styles/raisedHeaderStyle'
import PageTitle from '../../styles/pageTitleStyle'
import Content from '../../styles/contentStyle'
import Description from  '../../styles/descriptionStyle'
import Container from '@material-ui/core/Container'
import HeaderImage from '../../components/HeaderImage'

export const ServicesPageTemplate = ({
  featuredimage,
  title,
  slug,
  html,
}) => (
  <div>
    <GlobalStyles />
    <SEO />
     <Content bg={theme.palette.primary.main} >
     <HeaderImage backgroundImage={featuredimage.childImageSharp.fluid} />
        <Container>
                  <RaisedHeader >
                    <PageTitle>{title}</PageTitle>
                        <Description>
                          <div dangerouslySetInnerHTML={{ __html: html }} />
                          <ServiceCatalog />  
                        </Description>
                  </RaisedHeader>
        </Container>
      </Content>

  </div>
)

ServicesPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.array,
  }),
}

const ServicesPage = ({ data }) => {

  return (
 
      <ServicesPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
      />
 
  )
}

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
  }),
}

export default ServicesPage

export const uery = graphql`
query ServicesPageTemplate {
   markdownRemark(frontmatter: {slug: {eq: "/services"}}) {
      html
      frontmatter {
      title
   featuredimage {
        childImageSharp {
          fluid(quality:95 maxHeight: 1080, maxWidth: 1645)  {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slug
    }
  }
allMarkdownRemark (filter: {frontmatter: {category: {eq: "service"}}}, sort: {order: ASC, fields: id}) { 
  edges {
      node {
        excerpt(pruneLength: 400)
        id
        posts:   frontmatter {
          slug
          sortorder
          title
          templateKey
          featured
        }
      }
    }
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
