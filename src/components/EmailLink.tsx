import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import { StaticQuery, graphql } from "gatsby"


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
    render={data =>  <a href={`mailto:${data.site.siteMetadata.contactPoint.email}?subject=Lawn%20Care%20Society&body=Dear%20%${data.site.siteMetadata.contactPoint.name},`} rel="nofollow"><EmailIcon /></a>}></StaticQuery>  

)

export default EmailLink
