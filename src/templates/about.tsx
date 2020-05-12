import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PageTemplate from '../components/PageTemplate'
import AboutIndex from '../components/AboutIndex'

export const About = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.standardimage.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        location={data.markdownRemark.frontmatter.location}
        html={data.markdownRemark.html}>
           <AboutIndex   category={data.markdownRemark.frontmatter.category} />
        </PageTemplate>   
  )
}

About.propTypes = {
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

export default About

export const query = graphql`
query About ($id: String!) {
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
