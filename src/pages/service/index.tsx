import React from 'react'
import { graphql } from 'gatsby'
import PageTemplate from '../../components/PageTemplate'
import PropTypes from 'prop-types'
import ServiceCatalog from '../../components/ServiceCatalog'

export const Services = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.standardimage.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}>
            <ServiceCatalog   category={data.markdownRemark.frontmatter.category} />
            </PageTemplate>   
  )
}

Services.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}


export default Services

export const query = graphql`query ServiceHeaderPage {
 
  site {
    siteMetadata {
      title
    }
  }
  markdownRemark(frontmatter: {slug: {eq: "/services"}}) {
    excerpt(pruneLength: 400)
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
}

`
