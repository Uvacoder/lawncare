import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PageTemplate from '../components/PageTemplate'
import PageIndex from '../components/PageIndex'

export const Page = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.bannerdesktop.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannertablet.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannersmartphone.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannermobile.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        location={data.markdownRemark.frontmatter.location}
        html={data.markdownRemark.html}>
           <PageIndex   category={data.markdownRemark.frontmatter.category} />
        </PageTemplate>   
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}

export default Page

export const query = graphql`
query Page ($id: String!) {
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
