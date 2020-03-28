import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import {
  createStyles,
  fade,
  Theme,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import Img from 'gatsby-image'
import { transparentize, readableColor } from 'polished'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
import Layout from '../components/layout'
import { Box, AnimatedBox} from '../elements'
import SEO from '../components/SEO'
// import theme from '../gatsby-plugin-theme-ui/index'
import { Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import GridItem from '../components/grid-item'
import palette from '../gatsby-plugin-theme-ui/palette'
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import theme from '../gatsby-plugin-theme-ui/createMuiTheme'
import lightGreen from '@material-ui/core/colors/lightGreen';



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

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`

const Content = styled(Box)<{ bg: string }>`
  background-color: ${theme.palette.primary};

  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${props => props.theme.space[10]};

    @media (max-width: ${props => props.theme.breakpoints[3]}) {
      margin-bottom: ${props => props.theme.space[8]};
    }
  }
`
const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${props => props.theme.fontSizes[1]};
  text-transform: capitalize;
  color: ${palette.palette.primary.active};
`


const PButton = styled(Button)<{ color: string }>`
  background: ${props => (props.color === 'white' ? 'black' : props.color)};
  color: ${props => readableColor(props.color === 'white' ? 'black' : props.color)};
`


const PageTitle = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  'titlepart1 titlepart2'
  'title'   ;
  padding: 1rem ;
  background-color: ${palette.palette.primary.background};
  text-align: center;
  margin: -80px 25% 20px 25%;
  box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
  PageTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },

` 
const TitlePart1 = styled(GridItem)`
  grid-area: titlepart1;
  color: ${palette.palette.primary.active}; 
  text-transform: none;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes[5]};
 `

const TitlePart2 = styled(GridItem)`
  grid-area: titlepart2;
  color: ${palette.palette.primary.text}; 
  text-transform: none;
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes[5]};
 `

 const Title = styled(GridItem)`
 grid-area: title;
 color: ${palette.palette.primary.active}; 
 text-transform: none;
 font-weight: 400;
 color: ${palette.palette.primary.text}; 
 font-size: ${props => props.theme.fontSizes[1]};

`
const RaisedHeader = styled(Container)`
 padding: 30px 0;
 margin: -300px 10px 140px 10px;
 //box-shadow: 0 16px 16px 2px rgba(43,44,62, 0.14), 0 6px 30px 5px rgba(43,44,62, 0.12), 0 8px 10px 5px rgba(43,44,62, 0.2), 0 8px 10px 5px rgba(43,44,62, 0.2);
 box-shadow: 3px 3px 5px 0px rgb(47, 54, 68, 0.4);
 border-radius: 12px;
 z-index: 3;
 position: relative;
 background-color: ${palette.palette.primary.text};
 color: ${palette.palette.primary.background};
 display: flex
 flexDirection: column
 minWidth: 0;
 wordWrap: break-word;
 transition: all 300ms linear ; 

`

const Description =  styled(Container)`
 
 letter-spacing: -0.003em;
 --baseline-multiplier: 0.179;
 --x-height-multiplier: 0.35;
 line-height: 1.58;
 margin: 30px;
 background-color: ${palette.palette.primary.background}; 
 
 a {
   color: ${palette.palette.primary.background}; 
   &:hover,
   &:focus {
     color: ${theme.palette.primary.active};
   }
}
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
            {/* <Content bg={theme.palette.primary.main} py={10}>
   

        <PBox style={imagesAnimation} px={[6, 6, 8, 10]}>
        <animated.h1 style={titleAnimation}>{data.markdownRemark.frontmatter.title_detail}</animated.h1>
          {images.nodes.map(image => (
            <Img alt={image.name} key={image.childImageSharp.fluid.src} fluid={image.childImageSharp.fluid} />
          ))}
        </PBox>
      </Content>   */}

      <Content bg={palette.palette.primary.main} >
      
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
  
        <Container
      style={{
        display: 'flex',
        height: '1000px',
        width: '70%' ,
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column',
      }}
    >
      </Container>  
 </BackgroundImage>

 <Container>

 <Container>

 <RaisedHeader    style={{
      display: 'flex',
      width: '90%' ,
      lineHeight: '1',
      justifyContent: 'space-around',
      alignItems: 'left',
      flexDirection: 'column',}}>
 <PageTitle   style={{
      display: 'flex',
      width: '70%' ,
      lineHeight: '1',
      justifyContent: 'space-around',
      alignItems: 'left',
      flexDirection: 'column',}}>
 <Container > 

 <h2 className="pageTitle"
                     style={{
                     boxShadow: 'transparent',
                     borderRadius: '0px',
                     backgroundColor: palette.palette.primary.background,
                     color: palette.palette.primary.text,
                     lineHeight: '1',
                     padding: '0.3em',
          
                 }}>

<Category style={categoryAnimation} color={palette.palette.primary.text}> 
 {/* <TitlePart1>lawns</TitlePart1> <TitlePart2>matter</TitlePart2>
 <br /> */}
 <Title color={palette.palette.primary.active}>{data.markdownRemark.frontmatter.title}</Title></Category></h2>

 <h4>  <Description style={descAnimation}>
 
     
     
 <Form size='large' name="contact" method="POST" data-netlify="true" data-netlify-honeypot="botfield ">
     <Segment stacked>

  
  <FormControl variant="outlined">
   <Container       display='flex'
                    width='80%'
                    lineHeight='1'
                    justifyContent='space-around'
                    alignItems='left'
                    flexDirection='column'>
   <InputField label="Name" variant="outlined" id="name-input"   />
   <br />
   <InputField label="Telephone Number" variant="outlined" id="telephone-number-input"   />
   <br />
   <InputField label="Email" variant="outlined" id="email-input"   />
   <br />
   <InputField label="Address" variant="outlined" id="address-input"   />
   <br />
   <InputField label="Post Code" variant="outlined" id="post-code-input"   />
   <br />   
   <InputField label="Message" variant="outlined" id="message-input" multiline rows="6" />
   <br />
   </Container>
   </FormControl>


   <SendMessageButton variant="contained" color="lightGreen">Send Message</SendMessageButton>

             {/* <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea> */}
   
             {/* <ul className="actions">
               <input type="submit" value="Send Message" className="primary" />
             </ul> */}
       
     </Segment>
   </Form>

   </Description></h4> 
   
</Container>
 </PageTitle>
   
    </RaisedHeader>
    </Container>  
    </Container>
    </Content>
      <Category style={categoryAnimation}>{data.markdownRemark.frontmatter.category}</Category>
        <Description style={descAnimation}>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </Description>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column width='fill-available'>
      
  
      </Grid.Column>
    </Grid>
  
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
