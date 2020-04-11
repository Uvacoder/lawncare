import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BlogIndex from '../components/BlogIndex'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { animated } from 'react-spring'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import { Box, Flex, AnimatedBox } from '../elements'
import { transparentize, readableColor } from 'polished'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import GridItem from '../components/grid-item'
import GlobalStyles from '../styles/globalStyle'
import { ChildImageSharp } from '../types'
import RaisedHeader from '../styles/raisedHeaderStyle'

const PBox = styled(AnimatedBox)`
  margin: 30 auto;
`



const Content = styled(Box)<{ bg: string }>`
  background-color: ${props => transparentize(0.9, theme.palette.primary.main)};
  

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${theme.typography.spacing};

    [theme.breakpoints.down('lg')]:  {
      margin-bottom: ${theme.typography.spacing};
    }
  }
`


const PageTitle = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:  'title'   ;
  padding: 1rem ;
  background-color: ${theme.palette.primary.main};
  text-align: center;
  margin: -80px 15% 20px 15%;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  PageTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
` 


const Title = styled(GridItem)`
  grid-area: title;
  color: ${theme.palette.secondary.main}; 
  text-transform: none;
  font-weight: ${theme.typography.h4.fontWeight};
  color: ${theme.palette.primary.contrastText}; 
  font-size: ${theme.typography.h2.fontSize};

`

const Description = styled(animated.div)`
  padding: 1rem;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
  margin: 10px;
`

const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-auto-rows: 50vw;
  grid-row-start: 2;

 [theme.breakpoints.down('md')]:  {
  grid-template-columns: 1fr;
  grid-auto-rows: 50vw;
}
`

export const TagsPageTemplate = ({
  featuredimage,
  title,
  heading,
  slug,
  html,
}) => (
  <div>
    <GlobalStyles />
    
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage
        })`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '800px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      />

 <RaisedHeader  >
            <PageTitle   style={{
        display: 'flex',
        width: '70%' ,
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',}}>

 <Title color={theme.palette.secondary.main}>{title}</Title>
        
          </PageTitle>
       
 
    <section className="section section--gradient">
      <div >
        {/* <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1"> */}
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
            
               <Description dangerouslySetInnerHTML={{ __html: html }} />
               
                  </div>
                </div>
                <Flex
              flexWrap="nowrap"
              flexDirection={['row', 'row', 'row', 'column']}
              alignItems={['center', 'center', 'center', 'flex-start']}
              justifyContent="space-between"
            >
    
               </Flex>


                <div className="columns">
                  <div >
                    {/* <Link className="btn" to="/products">
                      See all products
                    </Link> */}
                  </div>
                </div>
                <div className="column is-12">
       
                  <BlogIndex />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
      </div>
    </section>
    </RaisedHeader>
    
    </div>
  // </div>
)

TagsPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.array,
  }),
}

const TagsPage = ({ data }) => {
  const { tagsdata } = data.markdownRemark
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <TagsPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        heading={data.markdownRemark.frontmatter.heading}
        html={data.markdownRemark.html}
      />
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
  }),
}

export default TagsPage

export const pageQuery = graphql`
 
  query TagsPageTemplate {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "post"}}}, sort: {order: ASC, fields: id}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            featuredimage {
              childImageSharp {
                fluid(quality: 95, maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            alt
          }
          excerpt(pruneLength: 147)
        }
      }
    }
    markdownRemark(frontmatter: {templateKey: {eq: "tags"}}) {
      id
      html
      frontmatter {
        title
        templateKey
        slug
        heading
        featured
        featuredimage {
          childImageSharp {
            fluid(quality: 95, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        alt
        sortorder
      }
    }
  }
  
`
