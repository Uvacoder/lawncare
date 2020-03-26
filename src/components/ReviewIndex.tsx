import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from './layout'
import GridLink from './grid-link'
import SEO from './SEO'
import { ChildImageSharp } from '../types'
import theme from '../gatsby-plugin-theme-ui/index'

type PageProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          excerpt: string
          id: string
          frontmatter: {
            title: string
            location: string
            slug: string
            templateKey: string
            featured: boolean
            featuredimage: ChildImageSharp
            }[]
        }
      }
    }
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 30vw;


`
class ReviewIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: reviews } = data.allMarkdownRemark

    return (

    
   
        <Area>
        {reviews &&
          reviews.map(({ node: review }) => (

         <GridLink key={review.frontmatter.slug} to={review.frontmatter.slug} aria-label={`View our lastest news "${review.frontmatter.title}"`}>
                        {/* <Img fluid={review.frontmatter.featuredimage.childImageSharp.fluid} /> */}
            <span>{review.frontmatter.title} 
            <br />
            {review.frontmatter.location}
            <br />
            <p>{review.excerpt}</p> </span>
          </GridLink>
         
          ))}
      </Area>
      
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query ReviewIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "review"}, featured: {eq: true}}}, sort: {order: ASC, fields: id}) {
        edges {
          node {
            excerpt(pruneLength: 147)
            id
            frontmatter {
              slug
              title
              location
              templateKey
              featured
              featuredimage {
                childImageSharp {
                  fluid(quality: 95, maxWidth: 1200) {
                      ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    
    `}
    render={(data, count) => <ReviewIndex data={data} count={count} />}
  />
)
