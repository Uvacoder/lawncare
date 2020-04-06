import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { createStyles, fade, Theme, ThemeProvider,  withStyles, makeStyles, createMuiTheme, } from '@material-ui/core/styles';
import Img from 'gatsby-image'
import { transparentize, readableColor } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import Layout from '../components/layout'
import { Box, AnimatedBox} from '../elements'
import SEO from '../components/SEO'
import { Form, Header, Image, Message, Segment } from 'semantic-ui-react'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import GridItem from '../components/grid-item'
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import lightGreen from '@material-ui/core/colors/lightGreen';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.primary.main,
    },
  }),
);

const TextInputField = styled(TextField)`
  variant: outlined;
`
const SendMessageButton = styled(Button)`
  variant: outlined;  
  color: primary;
`


const InputField = withStyles({
  root: {
    color: 'lightGreen',
    '& label.Mui-focused': {
      color: 'lightGreen',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'lightGreen',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'lightGreen',
      },
    },
  },
})(TextInputField);


const Content = styled(Box)<{ bg: string }>`

`
const Category = styled(AnimatedBox)`

`


const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`


const PageTitle = styled(Container)`


` 

 const Title = styled(GridItem)`
 text-align: center;

`

const Description =  styled(Container)`

`


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
          featuredimage_alt: string
          tags: string
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
        title={`${data.markdownRemark.frontmatter.title_detail} | ${data.site.siteMetadata.siteUrl}`}
        desc={data.markdownRemark.frontmatter.desc}
        node={data.markdownRemark.frontmatter.parent}
        banner={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
      />
     

      <Content bg={theme.palette.primary.contrastText} >
      
      <BackgroundImage

        fluid={imageData}
        style={{
        backgroundAttachment: 'fixed',     
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        }}
        // backgroundSize="cover"          
      >   
      {/* <ImageCarousel /> */}
  

 </BackgroundImage>


 <PageTitle 
   style={{
      display: 'flex',
       width: '70%' ,
      lineHeight: '1',
      justifyContent: 'space-around',
      alignItems: 'left',
      flexDirection: 'row',}}
      >
 <Container > 
 <h2 className="pageTitle"
                     style={{
                     boxShadow: 'transparent',
                     borderRadius: '0px',
                    //  backgroundColor: theme.palette.primary.contrastText,
                     color: theme.palette.primary.main,
                     lineHeight: '1',
                     padding: '0.3em',
          
                 }}>

<Category style={categoryAnimation} color={theme.palette.primary.main}> 

 <Title color={theme.palette.secondary.main}>{data.markdownRemark.frontmatter.title}</Title></Category></h2>

 <h4>  <Description style={descAnimation}>
      <Container>
 <Form size='large' name="contact" method="POST" data-netlify="true" data-netlify-honeypot="botfield ">

    <FormControl>

      <Grid container spacing={3}>
        <Grid item xs ><InputField id="standard-secondary" label="Name" id="name-input"   /></Grid>
        <Grid item xs><InputField label="Tel No:" id="telephone-number-input" /></Grid>
        <Grid item xs><InputField label="Email" id="email-input"   /></Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs><InputField label="Address"  id="address-input" size="large"  /></Grid>
        <Grid item xs><InputField label="Town"  id="postal-town-input" size="large"  /></Grid>
        <Grid item xs><InputField label="Post Code" id="postcode-input"  /></Grid>
        </Grid> 
          <Grid item  ><InputField  label="Message" fullWidth placeholder="Please enter your message here " id="message-input" multiline rows="3" size="large" /></Grid>
        <Grid container spacing={3}>
        <Grid item xs></Grid>
        </Grid>
        {/* </div> */}
        <br />
        <SendMessageButton variant="contained" color="default">Send Message</SendMessageButton>
   </FormControl>
   </Form>
   </Container>

   </Description></h4> 
   
</Container>
 </PageTitle>
   
 
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
      tags
      featuredimage {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      featuredimage_alt
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
