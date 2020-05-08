import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ReviewIndex from '../components/ReviewIndex'
import PageTemplate from '../components/PageTemplate'
import PropTypes from 'prop-types'



  const ReviewPage = ({ data }) => {
   
    return (
      <Layout>
        <PageTemplate
          featuredimage={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
          title={data.markdownRemark.frontmatter.title}
          slug={data.markdownRemark.frontmatter.slug}
          html={data.markdownRemark.html}>
            <ReviewIndex category={data.markdownRemark.frontmatter.category} />
        </PageTemplate>   
      </Layout>
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
   excerpt(pruneLength: 400)
    html
    frontmatter {
      slug
      title
      templateKey
      category
      created_time
      recommendation_type_positive
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
      contactPoint {
        email
        name
      }
    }
  }
}



`
