import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PageTemplate from '../components/PageTemplate'
import ServiceCatalog from '../components/ServiceCatalog'

export const Service = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.bannerdesktop.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannertablet.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannersmartphone.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannermobile.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}>
           <ServiceCatalog   category={data.markdownRemark.frontmatter.category} />
        </PageTemplate>   
  )
}

Service.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}

export default Service

export const query = graphql`
query Service ($id: String!) {
   markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      slug
      title
      templateKey
      category
      ...bannerImageDesktop
      ...bannerImageTablet
      ...bannerImageSmartphone
      ...bannerImageMobile
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
