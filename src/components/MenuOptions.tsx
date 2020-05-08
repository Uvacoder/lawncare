import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Nav from '../styles/navStyle'
import MenuStyle from '../styles/menuStyle'
import Menu from '@material-ui/core/Menu'


class MenuOptions extends React.Component {
    render() {
  
      const { data } = this.props
      const { nodes: items } = data.allNavigationYaml
      return (
      
   
  <MenuStyle>


            {items.map(item => (
                      <Link to={item.link} key={item.name}>
                        {item.name}
                      </Link>
                    ))}
          
            </MenuStyle>
        
        
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
