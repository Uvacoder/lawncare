import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { createStyles, Theme,  withStyles, makeStyles,  } from '@material-ui/core/styles';
import Img from 'gatsby-image'
import { readableColor } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import Layout from '../components/layout'
import { Box, AnimatedBox} from '../elements'
import SEO from '../components/SEO'
import { Form } from 'semantic-ui-react'
import Container from '@material-ui/core/Container'
import GridItem from '../components/grid-item'
import FormControl from '@material-ui/core/FormControl';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Grid from '@material-ui/core/Grid';
import RaisedHeader from '../styles/raisedHeaderStyle'
import PBox from '../styles/pboxStyle'
import GlobalStyles from '../styles/globalStyle'
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import Category from '../styles/categoryStyle'
import PButton from '../styles/pbuttonStyle'
import Title from '../styles/titleStyle'
import Description from '../styles/descriptionStyle'
import BackgroundImage from 'gatsby-background-image'


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
  color: secondary; 
`
const SendMessageButton = styled(Button)`
  variant: outlined;  
  color: primary;
`


const InputField = withStyles({
  root: {
    color: theme.palette.secondary.main,
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
        title={data.site.siteMetadata.serviceName}
        desc={data.markdownRemark.frontmatter.desc}
        node={data.markdownRemark.frontmatter.parent}
        banner={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
      />
     
   
      <Content bg={theme.palette.primary.contrastText} >
      <BackgroundImage
        
        fluid={imageData}
        style={{
        backgroundAttachment: 'fixed',     
        backgroundPosition: 'top ',
        backgroundSize: '960px 640px',
        }}
        // backgroundSize="cover"          
        >   
      <Container
        style={{
          height: '33vw',

        }}
      >
        </Container>  
        </BackgroundImage>
 <PageTitle >
 <Container > 
    <h2 className="pageTitle"
                        style={{
                        boxShadow: 'transparent',
                        borderRadius: '0px',
                        //  backgroundColor: theme.palette.primary.contrastText,
                        color: theme.palette.primary.contrastText,
                        lineHeight: '1',
                        padding: '0.3em',
              
                    }}>

    <Category style={categoryAnimation} color={theme.palette.primary.contrastText}> 

    <Description style={descAnimation}>
    <Title >{data.markdownRemark.frontmatter.title}</Title>

          <Container>
    <Form size='large' name="contact" method="POST" data-netlify="true" data-netlify-honeypot="botfield ">
        <FormControl>
          <Grid container spacing={1} >
            <Grid item xs={3} ><InputField  label="Name" id="name-input"   /></Grid>
            <Grid item xs={1} />
            <Grid item xs={3}><InputField label="Tel No:" id="telephone-number-input" /></Grid>
            <Grid item xs={1} />
            <Grid item xs={4}><InputField label="Email" id="email-input"   /></Grid>
            </Grid>
            <Grid container spacing={1} >
            <Grid item xs={4} ><InputField label="Address"  id="address-input" size="large"  /></Grid>
            <Grid item xs={1} />
            <Grid item xs={3} ><InputField label="Town"  id="postal-town-input" size="large"  /></Grid>
            <Grid item xs={1} />
            <Grid item xs={3} ><InputField label="Post Code" id="postcode-input"  /></Grid>
            </Grid> 
              <Grid item  ><InputField  label="Message" fullWidth placeholder="Please enter your message here " id="message-input" multiline rows="3" size="large" /></Grid>
            <Grid container spacing={1}>
            <Grid item xs></Grid>
            </Grid>
            {/* </div> */}
            <br />
            <SendMessageButton variant="contained" color="default">Send Message</SendMessageButton>
            <br />
      </FormControl>
      </Form>
      </Container>

      </Description>
    
    </Category>
    
    </h2>
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
