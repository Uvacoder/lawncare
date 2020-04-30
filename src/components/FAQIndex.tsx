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
import List from '../styles/listStyle'

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


class FAQIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: faqs } = data.allMarkdownRemark

    return (

    
   
        <List>
        {faqs &&
          faqs.map(({ node: faq }) => (

         <Link key={faq.frontmatter.slug} to={faq.frontmatter.slug} aria-label={`Frequently Asked Questions "${faq.frontmatter.title}"`}>
                      
            <span><h4 >Q. {faq.frontmatter.title}</h4>
            <h6>{faq.excerpt}</h6> </span>
          </Link>
         
          ))}
      </List>
      
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
          
            }
          }
        }
      }
    }  
    `}
    render={(data, count) => <FAQIndex data={data} count={count} />}
  />
)
