import React from "react"
import { StaticQuery, graphql } from "gatsby"
import GappsappsIcon from './gappsappsIcon'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Button from '@material-ui/core/Button'


const DeveloperLink = () => (
  <StaticQuery
    query={graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
    `}
    render={data =>
      <Button>
        <a href={`https://www.${data.site.siteMetadata.author}`} rel="nofollow" >
 <GappsappsIcon style={{ color: theme.palette.primary.contrastText }}/><br />Gappsapps</a>
 </Button>}
  ></StaticQuery>
)

export default DeveloperLink
