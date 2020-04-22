import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone'
import { StaticQuery, graphql } from "gatsby"
import theme from '../gatsby-theme-material-ui-top-layout/theme'


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
    render={data =>  <a href={`tel:${data.site.siteMetadata.availableChannel.servicePhone}`} rel="nofollow">
      <PhoneIcon  aria-label="Call us now" style={{ color: theme.palette.primary.contrastText }}  alignItems="center"/></a>}></StaticQuery>  

)

export default PhoneLink
