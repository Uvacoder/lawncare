import React from 'react'
import { graphql } from 'gatsby'
import { createStyles, Theme,  withStyles, makeStyles  } from '@material-ui/core/styles';
import styled from 'styled-components'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { Form } from 'semantic-ui-react'
import FormControl from '@material-ui/core/FormControl';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Grid from '@material-ui/core/Grid';
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import HeaderImage from '../components/HeaderImage'
import FormContainer from '../styles/formContainerStyle'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      // padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.primary.contrastText,
    },
  }),
);

const TextInputField = styled(TextField)`
  variant: outlined;
  color: ${theme.palette.primary.contrastText}; 
`
const SendMessageButton = styled(Button)`
  variant: outlined;  
  color: primary;
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
          categories: string
          featuredimage: ChildImageSharp
          }
        }
     }

     const Contact = ({ data }) => {
      const categoryAnimation = useSpring({
        config: config.slow,
        from: { opacity: 0, transform: 'translate3d(0, -30px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      })
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      };
      const classes = useStyles();
      const titleAnimation = useSpring({ config: config.slow, delay: 30, from: { opacity: 0 }, to: { opacity: 1 } })
      const descAnimation = useSpring({ config: config.slow, delay: 60, from: { opacity: 0 }, to: { opacity: 1 } })
      const imagesAnimation = useSpring({ config: config.slow, delay: 80, from: { opacity: 0 }, to: { opacity: 1 } })
      const imageData = data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid
      return ( 
      
     <Layout color={theme.palette.primary.contrastText}>
      <SEO
        pathname={data.markdownRemark.frontmatter.slug}
        title={data.markdownRemark.frontmatter.title}
        desc={data.markdownRemark.frontmatter.desc}
        node={data.markdownRemark.frontmatter.parent}
        banner={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
      />
     
   
     <Content bg={theme.palette.primary.main} >
      <HeaderImage backgroundImage={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid} />
    
      <RaisedHeader >
    <PageTitle >{data.markdownRemark.frontmatter.title}</PageTitle>
      <FormContainer >
                    <Form size='large' name="contact" method="POST" data-netlify="true" data-netlify-honeypot="botfield ">
                  <FormControl>
                    <Grid container spacing={1} >
                      <Grid item xs={5} ><InputField label="Name" id="name-input"   /></Grid>
                      <Grid item xs={1} />
                      <Grid item xs={6} ><InputField label="Address"  id="address-input" size="large"  /></Grid>
                      </Grid>  
                      <Grid container spacing={1} >   
                      <Grid item xs={5} ><InputField label="Town"  id="postal-town-input" size="large"  /></Grid>
                      <Grid item xs={1} />
                      <Grid item xs={6}><InputField label="Tel No:" id="telephone-number-input" /></Grid>
                      </Grid>  
                      <Grid container spacing={1} >  
                      <Grid item xs={5} ><InputField label="Post Code" id="postcode-input"  /></Grid>
                      <Grid item xs={1} />
                      <Grid item xs={6}><InputField label="Email" id="email-input"   /></Grid>
                      </Grid> 
                        <Grid item  ><InputField  label="Message" fullWidth placeholder="Please enter your message here " id="message-input" multiline rows="3" size="large" /></Grid>
                      <Grid container spacing={1}>
                      <Grid item xs></Grid>
                      </Grid>
                      <br />
                      <SendMessageButton  aria-label="Send message button" variant="contained" color="default">Send Message</SendMessageButton>
                      <br />
                </FormControl>
                </Form>
   
               
      </FormContainer>
      </RaisedHeader>



    
      

    </Content>


    </Layout>
  )
}

export default Contact

export const query = graphql`

  query Contact  { 
 markdownRemark(frontmatter: {slug: {regex: "/contactus/"}})  {
    excerpt(pruneLength: 400)
    html
    frontmatter {
      slug
      title
      templateKey
      categories
      featuredimage {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
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
