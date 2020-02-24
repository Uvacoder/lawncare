import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default class MenuOptions extends React.Component {
  render() {
    return (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
        menuoptions: distinct(field: frontmatter___menu)
        }
      }
    `} />
    )}
    }
