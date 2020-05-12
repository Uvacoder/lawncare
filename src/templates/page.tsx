import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PageTemplate from '../components/PageTemplate'
import PageIndex from '../components/PageIndex'

export const Page = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.standardimage.childImageSharp.fluid}
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
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      serviceName: PropTypes.string.isRequired,
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
      ...standardImage
      alt
      featured
    }
    id
  }
  site {
    siteMetadata {
      serviceName
      title
    }
  }
}


`
