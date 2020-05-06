import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import Description from  '../styles/descriptionStyle'
import Container from '@material-ui/core/Container'
import HeaderImage from '../components/HeaderImage'
import Img from "gatsby-image"
import GridLink from '../components/grid-link'
import { ChildImageSharp } from '../types'
import GlobalStyles from '../styles/globalStyle'
import { animated } from 'react-spring'
import styled from 'styled-components'

type PageProps =  {
  header:{
    id: string
    html: markdown
    frontmatter: {
      title: string
      templateKey:  string
      slug:  string
      featured:  boolean
      category:  string
      featuredimage: childImageSharp
      alt: string
      sortorder: number
    }
  }
  posts: {
    id: string
    frontmatter: {
      alt: string
      slug: string
      featured:  boolean
      title: string
      templateKey: string
      sortorder: number
      location: string
      featured: boolean
      featuredimage:  ChildImageSharp
    }
  }[]
  site: {
    siteMetadata: {
      siteUrl: string
      serviceName: string
      contactPoint: {
        email: string
        name: string
      }
    }
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 35vw;

 [theme.breakpoints.down('md')]: {
    grid-template-columns: 1fr;
    grid-auto-rows: 30vw;
  }
`


    const HeaderIndex = ({ data, posts }) => {
      const imageData = data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid
    
      return  (  
<Layout>
    <SEO  pathname={data.markdownRemark.slug}
        title={data.markdownRemark.title}
        node={data.markdownRemark.slug}
        banner={imageData}
        organisation
        />
    <Helmet title={data.markdownRemark.title} />
    <Content bg={theme.palette.primary.main} >
      <HeaderImage backgroundImage={imageData} />
        <Container>
            <RaisedHeader  >
                <PageTitle >{data.markdownRemark.title}</PageTitle>
                <Description>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    <Area>
                        {posts &&
                        posts.map(({ node: post }) => (
                          <GridLink key={post.frontmatter.slug} to={post.frontmatter.slug} aria-label={`View page "${post.frontmatter.title}"`}>
                               <Img fluid={post.frontmatter.featuredimage.childImageSharp.fluid} />
                               <span>{post.frontmatter.title}</span>
                          </GridLink>
                          ))}
                    </Area>
                </Description>
           </RaisedHeader>
         </Container>
    </Content>
    </Layout>
    )
  }

export default HeaderIndex

export const query = graphql`
  query HeaderIndex($category: String!) {
   markdownRemark(frontmatter: {category: {eq: $category}}) {
        id
        html
        frontmatter {
          title
          templateKey
          slug
          featured
          category
          featuredimage {
            childImageSharp {
              fluid(quality: 95, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          alt
          sortorder
        }
      }
      site {
        siteMetadata {
          siteUrl
          serviceName
          contactPoint {
            email
            name
          }
        }
      }
    posts: allMarkdownRemark (filter: {frontmatter: {categories: {eq: $category}, featured: {eq: true}}}, sort: {order: ASC, fields: frontmatter___sortorder}) {
        edges {
           node {
            id
            frontmatter {
              alt
              slug
              featured
              title
              categories
              templateKey
              sortorder
              location
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
    `


