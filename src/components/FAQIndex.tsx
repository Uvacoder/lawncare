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
class FAQIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: faqs } = data.allMarkdownRemark

    return (

    
   
        <Area>
        {faqs &&
          faqs.map(({ node: faq }) => (

         <GridLink padding="1rem" key={faq.frontmatter.slug} to={faq.frontmatter.slug} aria-label={`View our lastest news "${faq.frontmatter.title}"`}>
                        {/* <Img fluid={faq.frontmatter.featuredimage.childImageSharp.fluid} /> */}
            <span>{faq.frontmatter.title} - {faq.frontmatter.location}
            <br />
            <br />
            <p>{faq.excerpt}</p> </span>
          </GridLink>
         
          ))}
      </Area>
      
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query FAQIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "faq"}}}, sort: {order: ASC, fields: id}) {
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
    render={(data, count) => <FAQIndex data={data} count={count} />}
  />
)
