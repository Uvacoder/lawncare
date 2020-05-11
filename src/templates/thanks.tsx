import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ThanksIndex from '../components/ThanksIndex'
import PageTemplate from '../components/PageTemplate'

export const ThanksPage = ({ data }) => {

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
    
        <ThanksIndex  category={data.markdownRemark.frontmatter.category}/>
      </PageTemplate>
  )
}
ThanksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}

export default ThanksPage

export const pageQuery = graphql`
query ThanksPage {
   markdownRemark(frontmatter: {templateKey: {eq: "thanks"}}) {
      html
      frontmatter {
      title
      ...bannerImageDesktop
      ...bannerImageTablet
      ...bannerImageSmartphone
      ...bannerImageMobile
      slug
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