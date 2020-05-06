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
            slug: string
            templateKey: string
            visible: boolean
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
            <h5>{faq.excerpt}</h5> </span>
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
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "faq"}, visible: {eq: true}}}, sort: {order: ASC, fields: frontmatter___sortorder}) {
        edges {
          node {
           excerpt(pruneLength: 400)
            id
            frontmatter {
              slug
              title
              templateKey
              visible
          
            }
          }
        }
      }
    }  
    `}
    render={(data, count) => <FAQIndex data={data} count={count} />}
  />
)
