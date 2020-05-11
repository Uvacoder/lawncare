import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import FAQIndex from '../components/FAQIndex'
import PageTemplate from '../components/PageTemplate'


export const FAQPage = ({ data }) => {

  return (
      <PageTemplate
      featuredimage={data.markdownRemark.frontmatter.bannerdesktop.childImageSharp.fluid}
      featuredimage={data.markdownRemark.frontmatter.bannertablet.childImageSharp.fluid}
      featuredimage={data.markdownRemark.frontmatter.bannersmartphone.childImageSharp.fluid}
      featuredimage={data.markdownRemark.frontmatter.bannermobile.childImageSharp.fluid}
       title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
         >
             <h4>More questions? Please take a look below...</h4>
               <FAQIndex />
        </PageTemplate>
  )
}

FAQPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}

export default FAQPage

export const pageQuery = graphql`
query FAQPage ($id: String!) {
   markdownRemark(id: { eq: $id }) {
   excerpt(pruneLength: 400)
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
