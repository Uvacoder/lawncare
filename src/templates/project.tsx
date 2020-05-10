import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PageTemplate from '../components/PageTemplate'
import ProjectIndex from '../components/ProjectIndex'

export const Project = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}>
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

}

export default Project

export const query = graphql`
query Project ($id: String!) {
   markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      slug
      title
      templateKey
      category
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
      title
    }
  }
}


`
