import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

type PageProps = {
  data: {
    allNavigationYaml: {
      nodes: {
        name: string
        link: string
      }
    }
  }
}

class MenuOptions extends React.Component {
  render() {
  const { data } = this.props
  const { nodes: menuOptions } = data.allNavigationYaml
  return (

    <Link to={data.allNavigationYaml.nodes.link}><ListItem><ListItemText>{data.allNavigationYaml.nodes.name}</ListItemText></ListItem></Link>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        allNavigationYaml {
          nodes {
            name
            link
          }
        }
      }
    `} 
    render={data =>  <MenuOptions data={data} />}
   />

    )
