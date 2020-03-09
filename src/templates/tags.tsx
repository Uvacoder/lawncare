import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-plugin-theme-ui/index'
import palette from '../gatsby-plugin-theme-ui/palette'
import { Box, AnimatedBox } from '../elements'
import { transparentize, readableColor } from 'polished'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import GridArticle from '../components/grid-article'
import GlobalStyles from '../styles/globalStyle'
import CssBaseline from '@material-ui/core/CssBaseline';


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
            featured: boolean
            featuredimage: ChildImageSharp
            }[]
        }
      }
    }
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 35vw;
  grid-template-areas:
  'article image'   
  'image article'
  'article image'   
  'image article'
  'article image'   
  'image article'  
  ;
}
`


class TagIndex extends React.Component {
  render() {
    
    const tags = this.props.data.allMarkdownRemark.edges
    const tagLinks = tags.map(tag => (
      <li key={tag.node.frontmatter.slug}>
        <Link to={tag.node.frontmatter.slug}>
          <h2 className="is-size-2">{tag.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} article${
      totalCount === 1 ? '' : 's'
    } with information in the category “${tag}”`

    return (
      <div>
        <Layout>
        <CssBaseline />
      <GlobalStyles />
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h2 className="taglist">{tagHeader}</h2>
                <ul className="taglist">{tagLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
                <Area>
        {tags &&
          tags.map(({ node: tag }) => (

         <GridArticle key={tag.frontmatter.slug} to={tag.frontmatter.slug} aria-label={`View page "${tag.frontmatter.title}"`}>
                        <Img fluid={tag.frontmatter.featuredimage.childImageSharp.fluid} />
            <span>{tag.frontmatter.title}</span>
          </GridArticle>

          ))}
      </Area>
              </div>
            </div>
          </div>
        </section>
        </Layout>
      </div>
    )
  }
}

export default TagIndex

export const tagPageQuery = graphql`
query TagRoute($tag: String) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 1000, sort: {fields: [frontmatter___slug], order: DESC}, filter: {frontmatter: {tags: {eq: $tag}}}) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          slug
          featuredimage {
            childImageSharp {
              fluid(quality: 80, maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          featuredimage_alt
        }
        excerpt(pruneLength: 147)
      }
    }
  }
}

`
