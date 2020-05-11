import React from 'react'
import { graphql } from 'gatsby'
import ReviewIndex from '../components/ReviewIndex'
import PageTemplate from '../components/PageTemplate'
import PropTypes from 'prop-types'

  const ReviewPage = ({ data }) => {
   
    return (
        <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.standardimage.childImageSharp.fluid}
          title={data.markdownRemark.frontmatter.title}
          location={data.markdownRemark.frontmatter.location}
          slug={data.markdownRemark.frontmatter.slug}
          html={data.markdownRemark.html}>
            <ReviewIndex category={data.markdownRemark.frontmatter.category} />
        </PageTemplate>   
    )
  }
  
  ReviewPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  
  }

export default ReviewPage

export const query = graphql`
query ReviewPage ($id: String!) {
   markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      slug
      title
      location
      templateKey
      category
      created_time
      recommendation_type_positive
      ...standardImage
      alt
      featured
    }
    id
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
