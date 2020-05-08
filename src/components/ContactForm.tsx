import React from 'react'
import { graphql, StaticQuery  } from 'gatsby'
import { createStyles, Theme,  withStyles, makeStyles  } from '@material-ui/core/styles'
import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Grid from '@material-ui/core/Grid'
import RaisedHeader from '../styles/raisedHeaderStyle'
import PageTitle from '../styles/pageTitleStyle'
import FormContainer from '../styles/formContainerStyle'


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
          featuredimage: ChildImageSharp
          }
        }
     }

class ContactForm extends React.Component {
    render() {
            
        return (
      
            <FormContainer >
                <form size='large' name="contact" method="POST" data-netlify="true" data-netlify-honeypot="botfield ">
                    <FormControl>
                        <Grid container  >
                            <Grid item xs={7} ><InputField fullWidth label="Name" id="name-input"   /></Grid>
                            <Grid item xs={7} ><InputField fullWidth label="Tel No:" id="telephone-number-input" /></Grid>
                        
                            <Grid item xs={12} ><InputField fullWidth label="Address"  id="address-input" size="large"  /></Grid>
                            <Grid item xs={7}><InputField fullWidth label="Post Code" id="postcode-input"  /></Grid>
                        
                            <Grid item xs={7}><InputField fullWidth label="Email" id="email-input"   /></Grid>
                            </Grid>  

                            <Grid item  ><InputField  label="Message" fullWidth placeholder="Please enter your message here " id="message-input" multiline rows="3" size="large" /></Grid>
                            <Grid container spacing={1}>
                            <Grid item xs={12}><br /></Grid>
                        
                            <br />
                            <Grid item xs={12}><SendMessageButton  aria-label="Send message button" variant="contained" color="primary">Send Message</SendMessageButton></Grid>
                            <br />
                        </Grid>
                    </FormControl>
                </form>
            </FormContainer>

  )
}
}
export default () => (
    <StaticQuery
      query={graphql`
  query ContactForm  { 
 markdownRemark(frontmatter: {templateKey: {eq: "contact"}})  {
    frontmatter {
      slug
      title
      templateKey
      featuredimage {
        childImageSharp {
          fluid(quality:95 maxHeight: 1080, maxWidth: 1645)  {
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
 `}
    render={(data) => <ContactForm data={data} />}
  />
)
