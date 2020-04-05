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
import theme from '../gatsby-theme-material-ui-top-layout/theme'

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
padding: 1rem;


`
class FAQIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: faqs } = data.allMarkdownRemark

    return (

    
   
        <Area>
        {faqs &&
          faqs.map(({ node: faq }) => (

         <Link key={faq.frontmatter.slug} to={faq.frontmatter.slug} aria-label={`Frequently Asked Questions "${faq.frontmatter.title}"`}>
                      
            <span><h5>Q. {faq.frontmatter.title}</h5>
            <h6>{faq.excerpt}</h6> </span>
          </Link>
         
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
           excerpt(pruneLength: 400)
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
