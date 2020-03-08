import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-plugin-theme-ui/index'
import { Box, AnimatedBox } from '../elements'
import { transparentize, readableColor } from 'polished'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import GridItem from '../components/grid-item'
 
const TagRoute = ({ data }) => {
 
    const tagpages = this.props.data.allMarkdownRemark.edges
    const tagpageLinks = tagpages.map(tagpage => (
      <li key={tagpage.node.frontmatter.slug}>
        <Link to={tagpage.node.frontmatter.slug}>
          <h2 className="is-size-2">{tagpage.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.tagpageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} tagpage${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`
    const PBox = styled(AnimatedBox)`
    max-width: 1400px;
    margin: 0 auto;
  `
  const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 35vw;
  grid-template-areas:
  'tagpages tagpages tagpages';
 ;

  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 35vw;

    grid-template-areas:
    'tagpages tagpages tagpages';
  ;
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 35vw;

    grid-template-areas:
    'tagpages tagpages'   ;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 35vw;

    grid-template-areas:
    'tagpages'  ;
  ;
  }
  `
  const TagPage = styled.div`
    grid-area: tagpages;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: ${props => props.theme.breakpoints[1]}) {
      grid-template-columns: 1fr;
      grid-auto-rows: 35vw;
    }
  `

  const Content = styled(Box)<{ bg: string }>`
    background-color: ${props => transparentize(0.9, theme.palette.primary.background)};
  
    .gatsby-image-wrapper:not(:last-child) {
      margin-bottom: ${props => props.theme.space[10]};
  
      @media (max-width: ${props => props.theme.breakpoints[3]}) {
        margin-bottom: ${props => props.theme.space[8]};
      }
    }
  `
  
  const Category = styled(AnimatedBox)`
    letter-spacing: 0.05em;
    font-size: ${props => props.theme.fontSizes[1]};
    text-transform: uppercase;
  `
  
  const Description = styled(animated.div)`
    max-width: 960px;
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    line-height: 1.58;
  `
  
  const PButton = styled(Button)<{ color: string }>`
    background: ${props => (props.color === 'white' ? 'black' : props.color)};
    color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
  `


  class TagPageIndex extends React.Component {
    render() {
  
      const { data } = this.props
      const { edges: tagpages } = data.allMarkdownRemark
  
    return (
      <Layout color={theme.palette.primary.main}>
         <SEO title="Lawn Care Service | lawnsmatter.co.uk" />
         <section className="section">
          <Helmet title={`${tag} | ${title}`} />
         <Area>
         
         {tagpages &&
          tagpages.map(({ node: tagpage }) => (

         <GridItem key={tagpage.frontmatter.slug} to={tagpage.frontmatter.slug} aria-label={`View tagpage "${tagpage.frontmatter.title}"`}>
                        <Img fluid={tagpage.frontmatter.featuredimage.childImageSharp.fluid} />
            <span>{tagpage.frontmatter.title}</span>
          </GridItem>
         
          ))}
          </Area>


        {/* <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">{tagpageLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>v
        </section> */}
        </section>
      </Layout>
    )
   }
  }
  }

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
           featuredimage {
          childImageSharp {
            fluid(quality: 80, maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }  
`
