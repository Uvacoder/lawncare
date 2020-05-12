import React from 'react'
import EmailIcon from '@material-ui/icons/Email'
import { StaticQuery, graphql } from "gatsby"
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Button from '@material-ui/core/Button'

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
      <Button>
        <a href={`mailto:${data.site.siteMetadata.contactPoint.email}?subject=Lawn%20Care&body=Dear%20${data.site.siteMetadata.contactPoint.name}`} rel="nofollow">
          <EmailIcon style={{ color: theme.palette.primary.contrastText }}/><br />Email </a>
        </Button>
        }
      >
        
  </StaticQuery>  

)

export default EmailLink
