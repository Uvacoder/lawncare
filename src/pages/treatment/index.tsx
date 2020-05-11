import React from 'react'
import { graphql } from 'gatsby'
import TreatmentIndex from '../../components/TreatmentIndex'
import PageTemplate from '../../components/PageTemplate'
import PropTypes from 'prop-types'

export const Treatments = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.standardimage.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}>
            <TreatmentIndex />
            </PageTemplate>   
  )
}

Treatments.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}


export default Treatments

export const query = graphql`query TreatmentHeaderPage {
 
  site {
    siteMetadata {
      title
    }
  }
  markdownRemark(frontmatter: {slug: {eq: "/treatments"}}) {
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
