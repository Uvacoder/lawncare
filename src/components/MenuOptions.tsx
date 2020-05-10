import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

class MenuOptions extends React.Component {
    render() {
  
      const { data } = this.props
      const { nodes: items } = data.allNavigationYaml
      return (

      <div>
  
         {items.map(item => (
                      <Link to={item.link} key={item.name}>
                       {item.name}
                      </Link>
                    ))}
       </div>
     
      
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
