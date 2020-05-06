import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import HeaderImage from '../components/HeaderImage'
import RaisedHeader from '../styles/raisedHeaderStyle'
import StarRatings from 'react-star-ratings'
import PageTitle from '../styles/pageTitleStyle'
import GlobalStyles from '../styles/globalStyle'
import Content from '../styles/contentStyle'

export const RatingPageTemplate = ({
  featuredimage,
  title,
  slug,
  rating,
}) => (
  <div>
    <GlobalStyles />
    <SEO  pathname={slug}
        title={title}
        node={slug}
        banner={featuredimage}
        organisation
        />
     <Content bg={theme.palette.primary.main} >
     <HeaderImage backgroundImage={featuredimage.childImageSharp.fluid} />
        <Container>
                  <RaisedHeader >
                    <PageTitle>{title}
                    <br />
                    <br />
                          <StarRatings
                          rating={rating}
                          starDimension="40px"
                          starSpacing="15px"
                          starRatedColor="FFD700"
                        />  
                     </PageTitle>
                  
            
                  </RaisedHeader>
        </Container>
      </Content>

  </div>
)

RatingPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  slug: PropTypes.string,
  rating: PropTypes.string,
}

const RatingPage = ({ data }) => {

  return (
    <Layout>
      <RatingPageTemplate
        featuredimage={data.markdownRemark.frontmatter.featuredimage}
        title={data.markdownRemark.frontmatter.title}
        slug={data.markdownRemark.frontmatter.slug}
        rating={data.markdownRemark.frontmatter.rating}
      />
    </Layout>
  )
}

RatingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}


export default RatingPage

export const query = graphql`
query RatingPage ($id: String!) {
   markdownRemark(id: { eq: $id }) {
   excerpt(pruneLength: 400)
    html
    frontmatter {
      slug
      title
      templateKey
      categories
      created_time
      rating
      recommendation_type_positive
      featuredimage {
        childImageSharp {
          fluid(quality:95 maxWidth: 1920)  {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      alt
      featured
    }
    id
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
