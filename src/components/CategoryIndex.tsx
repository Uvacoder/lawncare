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

    const { data, count } = this.props
    const { edges: categories } = data.allMarkdownRemark

    return (

    
   
        <Area>
        {categories &&
          categories.map(({ node: category}) => (

         <Link key={category.group.fieldValue} to={category.group.fieldValue} aria-label={`Category "${category.group.fieldValue}"`}>
                      
            <span><h5>{category.group.fieldValue} - {category.group.totalCount}</h5></span>
     
          </Link>
         
          ))}
      </Area>
      
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query CategoriesQuery {
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
    }
    
    `}
    render={(data, count) => <CategoryIndex data={data} count={count} />}
  />
)
