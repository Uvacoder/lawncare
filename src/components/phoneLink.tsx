import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone'
import { StaticQuery, graphql } from "gatsby"


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
    render={data =>  <a href={`tel:${data.site.siteMetadata.availableChannel.servicePhone}`} rel="nofollow"><PhoneIcon alignItems="center"/></a>}></StaticQuery>  

)

export default PhoneLink
