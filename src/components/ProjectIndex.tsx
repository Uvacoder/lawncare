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
          excerpt: string
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


class ProjectIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: projects } = data.allMarkdownRemark
    
    return (
        <Area>
        {projects &&
          projects.map(({ node: project }) => (
      
         <GridLink key={project.frontmatter.slug} to={project.frontmatter.slug} aria-label={`View project "${project.frontmatter.title}"`}>
            <Img fluid={project.frontmatter.featuredimage.childImageSharp.fluid} />
           <span>{project.frontmatter.title}</span>
          </GridLink>
          ))}
      </Area>

    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
    query ProjectIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}, visible: {eq: true}}},  sort: {order: ASC, fields: frontmatter___sortorder}) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              templateKey
              featured
              visible
              featuredimage {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 450, maxHeight: 450)  {
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
    render={(data) => <ProjectIndex data={data} />}
  />
)
