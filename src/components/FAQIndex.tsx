import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

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

        <div>
        {faqs &&
          faqs.map(({ node: faq }) => (
         <Link key={faq.frontmatter.slug} to={faq.frontmatter.slug} aria-label={`Frequently Asked Questions "${faq.frontmatter.title}"`}>     
            <span><h5 >Q. {faq.frontmatter.title}</h5>
            <h5>{faq.excerpt}</h5> </span>
          </Link>
         
          ))}
      </div>
      
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query FAQIndexQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "faq"}, visible: {eq: true}, header: {eq: false}}}, sort: {order: ASC, fields: frontmatter___sortorder}) {
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
