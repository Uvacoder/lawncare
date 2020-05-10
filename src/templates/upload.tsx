import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Uploader from '../components/uploader'
import FormPageTemplate from '../components/FormPageTemplate'


 export const Upload = ({ data }) => {
  
  return (
    <Layout>
      <FormPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
         >
     <Uploader />
        </FormPageTemplate>
    </Layout>
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
      featuredimage {
        childImageSharp {
          fluid(quality:95 maxHeight: 1080, maxWidth: 1645)  {
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
