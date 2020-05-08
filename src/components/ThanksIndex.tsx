import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
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
            alt: string
            slug: string
            templateKey: string
            featured: boolean
            }[]
        }
      }
    }
  }
}


class ThanksIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: reviews } = data.allMarkdownRemark

    return (

    
   
        <List>
        {reviews &&
          reviews.map(({ node: review }) => (

         <Link key={review.frontmatter.slug} to={review.frontmatter.slug} aria-label={`Thanks for the "${review.frontmatter.alt}"`}>
         <h6> Thanks for the {review.frontmatter.alt} used on the page entitled {review.frontmatter.title}.</h6>
          </Link>
         
          ))}
      </List>
      
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query ThanksIndexQuery {
        allMarkdownRemark(filter: {frontmatter: {visible: {eq: true}, alt: {regex: "/Unsplash/"}}}, sort: {order: ASC, fields: frontmatter___slug}) {
          edges {
            node {
              frontmatter {
                slug
                title
                alt
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
    render={(data) => <ThanksIndex data={data}  />}
  />
)
