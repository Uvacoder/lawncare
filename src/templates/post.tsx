import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import ParallaxHeader from '../components/ParallaxHeader'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PBox from '../styles/pboxStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import Category from '../styles/categoryStyle'
import Title from '../styles/titleStyle'
import Description from  '../styles/descriptionStyle'

type PageProps = {
  data: {
        id: string
        excerpt: string
        html: markdown
        frontmatter: {
          title: string
          templateKey: string
          featured: boolean
          slug: string
          alt: string
          categories: string
          featuredimage: ChildImageSharp
          }
        }
  }


  const BlogPage = ({ data }) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const titleAnimation = useSpring({ config: config.slow, delay: 30, from: { opacity: 0 }, to: { opacity: 1 } })
  const descAnimation = useSpring({ config: config.slow, delay: 60, from: { opacity: 0 }, to: { opacity: 1 } })
  const imagesAnimation = useSpring({ config: config.slow, delay: 80, from: { opacity: 0 }, to: { opacity: 1 } })
  const imageData = data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid
  return (
    <div>
    <Layout color={theme.palette.primary.main}>
      <SEO
        pathname={data.markdownRemark.frontmatter.slug}
        title={data.markdownRemark.frontmatter.title}
        desc={data.markdownRemark.excerpt}
        node={data.markdownRemark.frontmatter.slug}
        banner={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
         />
      <Helmet title={data.markdownRemark.frontmatter.title} />
      <Content bg={theme.palette.primary.main} py={10}>
      <ParallaxHeader backgroundImage={imageData} />

        <RaisedHeader  >
          <PageTitle >{data.markdownRemark.frontmatter.title}</PageTitle>
          <Description style={descAnimation}>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </Description>
          <PBox style={{ textAlign: 'center' }}  >
            <Link to="/contactus">
            <Button  aria-label="Link to contact us form " variant="contained" color="primary" margin="1rem" py={4} px={8}>
              Contact Us
            </Button>
            </Link>
          </PBox>
        </RaisedHeader>
     </Content>
</Layout>
    </div>
  )
}


export default BlogPage

export const query = graphql`
query BlogPage ($id: String!) {
   markdownRemark(id: { eq: $id }) {
   excerpt(pruneLength: 400)
    html
    frontmatter {
      slug
      title
      templateKey
      categories
      featuredimage {
        childImageSharp {
          fluid(maxHeight: 1200, maxWidth: 1645) {
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
      title
    }
  }
}


`
