import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import List from '@material-ui/core/List';

class MenuOptions extends React.Component {
    render() {
  
      const { data } = this.props
      const { nodes: items } = data.allNavigationYaml
      return (

      <List >
  
         {items.map(item => (
                      <Link to={item.link} key={item.name}>
                       {item.name}
                      </Link>
                    ))}
       </List>
     
      
    )
  }
}

export default () => (
    <StaticQuery
      query={graphql`
  query MenuOptions {
    allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`}
render={(data) => <MenuOptions data={data} />}
/>
)
