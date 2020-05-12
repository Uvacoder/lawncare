import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PageTemplate from '../components/PageTemplate'
import ProjectIndex from '../components/ProjectIndex'

export const Project = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.standardimage.childImageSharp.fluid}
        title={`${data.site.siteMetadata.serviceName} in ${data.markdownRemark.frontmatter.location}`}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}>
    <h6>     Please take a look at the rest of our portfolio...  </h6>
           <ProjectIndex   />
        </PageTemplate>   
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      serviceName: PropTypes.object,
    }),
  }),
}

export default Project

export const query = graphql`
query Project ($id: String!) {
   markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      slug
      title
      location
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
    }
  }
}


`
