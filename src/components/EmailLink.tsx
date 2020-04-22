import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import { StaticQuery, graphql } from "gatsby"
import theme from '../gatsby-theme-material-ui-top-layout/theme'


const EmailLink = () => (
  <StaticQuery
    query={graphql`
    {
      site {
        siteMetadata {
          contactPoint {
            name
            email
          }
        }
      }
    }
    `}
    render={data =>  
        
        <a href={`mailto:${data.site.siteMetadata.contactPoint.email}?subject=Lawn%20Care&body=Dear%20${data.site.siteMetadata.contactPoint.name}`} rel="nofollow">
          <EmailIcon aria-label="Send us an email" style={{ color: theme.palette.primary.contrastText }}/>
        </a>}
      >
        
  </StaticQuery>  

)

export default EmailLink
