import React from 'react'
import { graphql } from 'gatsby'
import { createStyles, Theme,  withStyles, makeStyles  } from '@material-ui/core/styles'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import HeaderImage from '../components/HeaderImage'
import Uploader from '../components/uploader'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.primary.contrastText,
    },
  }),
);

const TextInputField = styled(TextField)`
  variant: outlined;
  color: ${theme.palette.primary.contrastText}; 
`

const InputField = withStyles({
  root: {
    color: theme.palette.secondary.main,
    '& label.Mui-focused': {
      color: 'Green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'Green',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'Green',
      },
    },
  },
})(TextInputField);


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
          category: string
          featuredimage: ChildImageSharp
          }
        }
     }

     const Upload = ({ data }) => {
      const classes = useStyles();
      const imageData = data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid
      return ( 
      
     <Layout color={theme.palette.primary.main}>
      <SEO
        pathname={data.markdownRemark.frontmatter.slug}
        title={data.markdownRemark.frontmatter.title}
        desc={data.markdownRemark.frontmatter.desc}
        node={data.markdownRemark.frontmatter.parent}
        banner={imageData}
      />
     
   
     <Content bg={theme.palette.primary.main} >
     <HeaderImage backgroundImage={imageData} />

      <Container >
              <RaisedHeader >
            <PageTitle >{data.markdownRemark.frontmatter.title}</PageTitle>
         
          <Uploader />
                   
              </RaisedHeader>
              </Container>
    </Content>
    </Layout>
  )
}

export default Upload

export const query = graphql`

  query Upload  { 
 markdownRemark(frontmatter: {templateKey: {eq: "upload"}})  {
    frontmatter {
      slug
      title
      templateKey
      category
      featuredimage {
        childImageSharp {
          fluid(quality:95 maxHeight: 1200, maxWidth: 1920)  {
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
      brand
      availableChannel {
        servicePhone
        serviceSmsNumber
        serviceUrl
      }
    }
  }
 }
`
