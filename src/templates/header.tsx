import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import CategoryIndex from '../components/CategoryIndex'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import GlobalStyles from '../styles/globalStyle'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import Description from  '../styles/descriptionStyle'
import Container from '@material-ui/core/Container'
import ParallaxHeader from '../components/ParallaxHeader'

export const HeaderPageTemplate = ({
  featuredimage,
  title,
  slug,
  html,
}) => (
  <div>
    <GlobalStyles />
    <SEO />
    <Content bg={theme.palette.primary.main} >
      <ParallaxHeader backgroundImage={featuredimage.childImageSharp.fluid} />
        <Container>
            <RaisedHeader  >
                <PageTitle >{title}</PageTitle>
                <Description>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                    <CategoryIndex />
                </Description>
           </RaisedHeader>
         </Container>
    </Content>

  </div>
)

HeaderPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.array,
  }),
}

const HeaderPage = ({ data }) => {
  const { headerdata } = data.markdownRemark


  return (
    <Layout>
      <HeaderPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        html={data.markdownRemark.html}
      />
    </Layout>
  )
}

HeaderPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HeaderPage

export const pageQuery = graphql`
 
  query HeaderPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "header"}}) {
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
            fluid(maxHeight: 1200, maxWidth: 1645) {
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
    }
  
`
