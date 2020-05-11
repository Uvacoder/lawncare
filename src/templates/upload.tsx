import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Uploader from '../components/uploader'
import FormPageTemplate from '../components/FormPageTemplate'


 export const Upload = ({ data }) => {
  
  return (
      <FormPageTemplate
        featuredimage={data.markdownRemark.frontmatter.bannerdesktop.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannertablet.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannersmartphone.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannermobile.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
         >
     <Uploader />
        </FormPageTemplate>
  )
}

Upload.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}

export default Upload

export const query = graphql`

  query Upload  { 
 markdownRemark(frontmatter: {templateKey: {eq: "upload"}})  {
    frontmatter {
      slug
      title
      templateKey
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
      brand
      availableChannel {
        servicePhone
        serviceSmsNumber
        serviceUrl
      }
    }
  }
 }
`
