import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { ChildImageSharp } from '../types'

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
class CategoryIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: categories } = data.allMarkdownRemark

    return (

    
   
        <Area>
        {categories &&
          categories.map(({ node: category}) => (

         <Link key={category.frontmatter.slug} to={category.frontmatter.slug} aria-label={`Frequently Asked Questions "${category.frontmatter.title}"`}>
                      
            <span><h5>{category.frontmatter.title}</h5>
            <h6>{category.excerpt}</h6> </span>
          </Link>
         
          ))}
      </Area>
      
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query categoriesQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(filter: {frontmatter: {categories: {ne: "header"}}}) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
      markdownRemark(frontmatter: {categories: {eq: "header"}}) {
        id
        frontmatter {
          slug
          title
          location
          templateKey
          featured
           featuredimage {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    
    `}
    render={(data, count) => <CategoryIndex data={data} count={count} />}
  />
)
