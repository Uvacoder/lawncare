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
import Title from '../styles/titleStyle'
import Description from  '../styles/descriptionStyle'

export const HeaderPageTemplate = ({
  featuredimage,
  title,
  heading,
  slug,
  html,
}) => (
  <div>
    <GlobalStyles />
    <SEO />
  
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
        style={{ height: '50vw', }}
      />

 <RaisedHeader  >
            <PageTitle   style={{
        display: 'flex',
        width: '70%' ,
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',
        }}>

 <Title color={theme.palette.secondary.main}>{title}</Title>
        
          </PageTitle>
       
 
    <section className="section section--gradient">
      <div >
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
            
               <Description dangerouslySetInnerHTML={{ __html: html }} />
               
                  </div>
                </div>
    

                <div className="columns">
        
                </div>
                <div className="column is-12">
       
                  <CategoryIndex />
                 
                </div>
              </div>
      </div>
    </section>
    </RaisedHeader>
    
    </div>
 </div>
)

HeaderPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  slug: PropTypes.string,
  html: PropTypes.markdown,
  posts: PropTypes.shape({
    frontmatter: PropTypes.array,
  }),
}

const HeaderPage = ({ data }) => {
  const { headerdata } = data.markdownRemark
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <HeaderPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        heading={data.markdownRemark.frontmatter.heading}
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
  allMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
  }),
}

export default HeaderPage

export const pageQuery = graphql`
 
  query HeaderPageTemplate ($category: String! ) {
    allMarkdownRemark(filter: {frontmatter: {categories: {eq: $category}}}, sort: {order: ASC, fields: id}) {
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
    markdownRemark(frontmatter: {templateKey: {eq: "header"}}) {
      id
      html
      frontmatter {
        title
        templateKey
        slug
        heading
        featured
        category
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
