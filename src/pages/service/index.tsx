import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { config, animated, useSpring } from 'react-spring'
import Layout from '../../components/layout'
import SEO from '../../components/SEO'
import theme from '../../gatsby-theme-material-ui-top-layout/theme'
import RaisedHeader from '../../styles/raisedHeaderStyle'
import PageTitle from '../../styles/pageTitleStyle'
import Content from '../../styles/contentStyle'
import Description from  '../../styles/descriptionStyle'
import ServiceCatalog from '../../components/ServiceCatalog'
import HeaderImage from '../../components/HeaderImage'

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


  const ServiceHeaderPage = ({ data }) => {
  const categoryAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  })
  const titleAnimation = useSpring({ config: config.slow, delay: 300, from: { opacity: 0 }, to: { opacity: 1 } })
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
        banner={imageData}
         />
      <Helmet title={data.markdownRemark.frontmatter.title} />
      <Content bg={theme.palette.primary.main}>
      <HeaderImage backgroundImage={imageData} />
        <RaisedHeader  >
        <animated.PageTitle style={titleAnimation} >{data.markdownRemark.frontmatter.title}</animated.PageTitle>
          <Description >
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
       
            <ServiceCatalog />
           
          </Description>
        </RaisedHeader>
     </Content>
</Layout>
    </div>
  )
}


export default ServiceHeaderPage

export const query = graphql`
query ServiceHeaderPage {
  markdownRemark(frontmatter: {category: {eq: "service"}}) {
    excerpt(pruneLength: 400)
    html
    frontmatter {
      slug
      title
      templateKey
      categories
      featuredimage {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
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
