import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone'
import { StaticQuery, graphql } from "gatsby"
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Button from '@material-ui/core/Button'

const PhoneLink = () => (
  <StaticQuery
    query={graphql`
    {
      site {
        siteMetadata {
          availableChannel {
            servicePhone
          }
        }
      }
    }
    `}
    render={data =>  
     <Button>
    <a href={`tel:${data.site.siteMetadata.availableChannel.servicePhone}`} rel="nofollow">
      <PhoneIcon alignItems="center"/>Phone</a>
      </Button>
    
      }></StaticQuery>  

)

export default PhoneLink
