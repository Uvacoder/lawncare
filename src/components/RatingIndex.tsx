import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { ChildImageSharp } from '../types'
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
            }[]
        }
      }
    }
  }
}


class RatingIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: ratings } = data.allMarkdownRemark

    return (

    
   
        <List>
        {ratings &&
          ratings.map(({ node: rating }) => (

         <Link key={rating.frontmatter.slug} to={rating.frontmatter.slug} aria-label={`View our ratings "${rating.frontmatter.title}"`}>
         <h6> {rating.frontmatter.title} - {rating.frontmatter.rating} Star rating</h6>
       
         
          </Link>
         
          ))}
      </List>
      
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query RatingIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "rating"}}}, sort: {order: ASC, fields: id}) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              location
              rating
            }
          }
        }
      }
      site {
        siteMetadata {
          title
         }
      }
    }
    
    `}
    render={(data, count) => <RatingIndex data={data} count={count} />}
  />
)
