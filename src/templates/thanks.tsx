import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ThanksIndex from '../components/ThanksIndex'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import GlobalStyles from '../styles/globalStyle'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import Description from  '../styles/descriptionStyle'
import Container from '@material-ui/core/Container'
import HeaderImage from '../components/HeaderImage'

export const ThanksPageTemplate = ({
  featuredimage,
  title,
  slug,
  html,
}) => (
  <div>
    <GlobalStyles />
    <SEO />
     <Content bg={theme.palette.primary.main} >
     <HeaderImage backgroundImage={featuredimage.childImageSharp.fluid} />
        <Container>
                  <RaisedHeader >
                    <PageTitle>{title}</PageTitle>
                        <Description>
                          <div dangerouslySetInnerHTML={{ __html: html }} />
                          <ThanksIndex />  
                        </Description>
                  </RaisedHeader>
        </Container>
      </Content>

  </div>
)

ThanksPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.array,
  }),
}

const ThanksPage = ({ data }) => {

  return (
    <Layout>
      <ThanksPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
      />
    </Layout>
  )
}

ThanksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
  }),
}

export default ThanksPage

export const pageQuery = graphql`
query ThanksPageTemplate {
   markdownRemark(frontmatter: {templateKey: {eq: "reviews"}}) {
      html
      frontmatter {
      title
   featuredimage {
        childImageSharp {
          fluid(quality:95 maxWidth: 1920)   {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slug
    }
  }
allMarkdownRemark (filter: {frontmatter: {templateKey: {eq: "review"}}}, sort: {order: ASC, fields: id}) { 
  edges {
      node {
        excerpt(pruneLength: 400)
        id
        posts:   frontmatter {
          slug
          title
          templateKey
          featured
        }
      }
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
}


  `