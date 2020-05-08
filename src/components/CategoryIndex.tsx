import React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link, graphql, StaticQuery } from 'gatsby'
import List from 'styles/listStyle'
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

class CategoryIndex extends React.Component {
  render() {

    const { data } = this.props
    const { edges: groups } = data.allMarkdownRemark


              return (

                <Area>
                {groups &&
                groups.map(({ node: group }) => (
                  <List key={group.fieldValue}>
                      <Link to={`/categories/${kebabCase(group.fieldValue)}/`}>
                        {group.fieldValue} ({group.totalCount})
                      </Link>
                  </List>
                ))}
           </Area>
      
      )
    }
  }


  export default () => (
    <StaticQuery
      query={graphql`
  query($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___sortorder], order: ASC }
      filter: { frontmatter: { category: { in: [$category] }, visible: {eq: true} } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
            category
          }
        }
      }
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
    markdownRemark(frontmatter: {templateKey: {eq: "category"}}) {
      id
      frontmatter {
        featuredimage {
          childImageSharp {
            fluid(quality:95 maxHeight: 1080, maxWidth: 1645)  {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        slug
        title
        alt
      }
      html
    }
  }
  `}
  render={(data, count) => <CategoryIndex data={data} count={count} />}
/>
)
