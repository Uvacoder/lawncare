import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ComponentHeader from '../components/ComponentHeader'
import {AreaServedMap} from '../components/AreaServedMap'

export const MapPage = ({ data }) => {

  return (
      <ComponentHeader
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
         >
            <AreaServedMap />
        </ComponentHeader>
  )
}

MapPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),

}

export default MapPage

export const pageQuery = graphql`
query MapPage {
   markdownRemark(frontmatter: {templateKey: {eq: "map"}}) {
      html
      frontmatter {
      title
      slug
    }
  }
  site {
    siteMetadata {
      serviceName
      title
    }
  }
}


  `