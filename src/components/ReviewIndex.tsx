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


class ReviewIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: reviews } = data.allMarkdownRemark

    return (

    
   
        <List>
        {reviews &&
          reviews.map(({ node: review }) => (

         <Link key={review.frontmatter.slug} to={review.frontmatter.slug} aria-label={`View our lastest news "${review.frontmatter.title}"`}>
         <h6> {review.excerpt} {review.frontmatter.title} - {review.frontmatter.location}</h6>
       
         
          </Link>
         
          ))}
      </List>
      
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
    render={(data) => <ReviewIndex data={data}  />}
  />
)
