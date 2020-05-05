// import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql, StaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
// import GridItem from './grid-item'
// import SEO from './SEO'
// import { ChildImageSharp } from '../types'

// type PageProps = {
//   data: {
//     allMarkdownRemark: {
//       edges: {
//         node: {
//           excerpt: string
//           id: string
//           frontmatter: {
//             title: string
//             slug: string
//             templateKey: string
//             featured: boolean
//             featuredimage: ChildImageSharp
//             }[]
//         }
//       }
//     }
//   }
// }


// class BlogRoll extends React.Component {
//   render() {

//     const { data } = this.props
//     const { edges: posts } = data.allMarkdownRemark

//     return (
//       <div>

//         <SEO title={data.site.siteMetadata.title} />
        
//         {posts &&
//           posts.map(({ node: post }) => (

//          <GridItem key={post.frontmatter.slug} to={post.frontmatter.slug} aria-label={`View our lastest news "${post.frontmatter.title}"`}>
//                         <Img fluid={post.frontmatter.featuredimage.childImageSharp.fluid} />
//             <span>{post.frontmatter.title}</span>
//           </GridItem>
         
//           ))}
//     </div>
//        )
     
//   }
// }

// export default () => (
//   <StaticQuery
//     query={graphql`
//     query BlogRollQuery {
//       allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "post"}}}, sort: {order: ASC, fields: id}) {
//         edges {
//           node {
//            excerpt(pruneLength: 400)
//             id
//             frontmatter {
//               slug
//               title
//               templateKey
//               featured
//               featuredimage {
//                 childImageSharp {
//                   fluid(quality: 100, maxWidth: 450, maxHeight: 450) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     } 
//     `}
//     render={(data, count) => <BlogRoll data={data} count={count} />}
//   />
// )
