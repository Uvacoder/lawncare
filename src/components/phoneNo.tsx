import React from 'react'
import { StaticQuery, graphql } from "gatsby"

export default class PhoneNo extends React.Component {
 render () {
     return (
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
    />
     )}
  }