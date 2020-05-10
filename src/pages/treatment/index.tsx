import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import TreatmentIndex from '../../components/TreatmentIndex'
import PageTemplate from '../../components/PageTemplate'
import PropTypes from 'prop-types'

export const Treatments = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
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
}

`
