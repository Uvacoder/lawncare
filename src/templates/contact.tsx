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
import PageTitle from '../styles/pageTitleStyle'
import Content from '../styles/contentStyle'
import Category from '../styles/categoryStyle'
import PButton from '../styles/pbuttonStyle'
import Title from '../styles/titleStyle'
import Description from '../styles/descriptionStyle'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      // padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.primary.main,
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
     <Layout color={theme.palette.primary.main}>
      <SEO
        pathname={data.markdownRemark.frontmatter.slug}
        title={`${data.markdownRemark.frontmatter.title_detail} | ${data.site.siteMetadata.siteUrl}`}
        desc={data.markdownRemark.frontmatter.desc}
        node={data.markdownRemark.frontmatter.parent}
        banner={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid}
      />
     

      <Content bg={theme.palette.primary.main} >
      

 <PageTitle 
   style={{
      display: 'flex',
       width: '70%' ,
      lineHeight: '1',
      justifyContent: 'space-around',
      alignItems: 'left',
      flexDirection: 'row',
    }}
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

    <Title >{data.markdownRemark.frontmatter.title}</Title>
    
    </Category>
    
    </h2>

      <Description style={descAnimation}>
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
            <br />
      </FormControl>
      </Form>
      </Container>

      </Description>
      
</Container>
 </PageTitle>
    </Content>
    <Container>
      <Img fixed={data.markdownRemark.frontmatter.featuredimage.childImageSharp.fluid} />
    </Container>

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
