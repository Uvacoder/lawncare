import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import GridLink from './grid-link'
import { ChildImageSharp } from '../types'
import Area from '../styles/areaStyle'

type PageProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string
          frontmatter: {
            title: string
            slug: string
            featured: boolean
            featuredimage: ChildImageSharp
            }[]
        }
      }
    }
  }
}


class BlogIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (

        <Area>
        {posts &&
          posts.map(({ node: post }) => (

         <GridLink key={post.frontmatter.slug} to={post.frontmatter.slug} aria-label={`View our lastest news "${post.frontmatter.title}"`}>
                        <Img fluid={post.frontmatter.featuredimage.childImageSharp.fluid} />
            <span>{post.frontmatter.title}</span>
          </GridLink>
         
          ))}
      </Area>
      
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {featured: {eq: true}, visible: {eq: true}}}, sort: {order: ASC, fields: frontmatter___sortorder}) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              featured
              featuredimage {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 450, maxHeight: 450) {
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
    render={(data, count) => <BlogIndex data={data} count={count} />}
  />
)
