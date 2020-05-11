import React from 'react'
import { graphql } from 'gatsby'
import PageTemplate from '../../components/PageTemplate'
import PropTypes from 'prop-types'
import FAQIndex from '../../components/FAQIndex'

export const FaqHeaderPage = ({ data }) => {

  return (
      <PageTemplate
        featuredimage={data.markdownRemark.frontmatter.bannerdesktop.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannertablet.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannersmartphone.childImageSharp.fluid}
        featuredimage={data.markdownRemark.frontmatter.bannermobile.childImageSharp.fluid}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}>
            <FAQIndex   category={data.markdownRemark.frontmatter.category} />
            </PageTemplate>   
  )
}

FaqHeaderPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}

export default FaqHeaderPage

export const query = graphql`
query FaqHeaderPage {
  markdownRemark(frontmatter: {slug: {eq: "/faqs"}}) {
    excerpt(pruneLength: 400)
    html
    frontmatter {
      slug
      title
      templateKey
      category
      ...bannerImageDesktop
      ...bannerImageTablet
      ...bannerImageSmartphone
      ...bannerImageMobile
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
