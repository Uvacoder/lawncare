import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import LogoLarge from './logoLarge'
import Gappsapps from './gappsapps'
import IconButtonBar from './IconButtonBar'
import SideBarInner from  '../styles/sideBarInnerStyle'
import Nav from '../styles/navStyle'
import MenuOptions from '../components/MenuOptions'
import MenuStyle from '../styles/menuStyle'
import theme from '../gatsby-theme-material-ui-top-layout/theme'



type PermanentDrawerLeftProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
  color: theme.palette.primary.main,
}

interface QueryResult {
  navigation: {
    nodes: {
      name: string
      link: string
    }[]
  }
}

const PermanentDrawerLeft = ({ children, color }: PermanentDrawerLeftProps) => {

  const data: QueryResult = useStaticQuery(query)

  return (
    <div >

 
<MenuStyle>
    <SideBarInner>

            <LogoLarge />
   
     
        
        <MenuOptions />

        
          <br />
          <br />
        <Divider />
          
        <IconButtonBar />

            <Divider />
            <br />
        <Nav href="https://www.gappsapps.co.uk" 
        // className={gappsappsLogo} 
        rel="nofollow">
            <ListItem button  aria-label="Link to the developer of this website Gappsapps" >
             <Gappsapps />
            </ListItem></Nav>
           
    
   
      </SideBarInner>

      </MenuStyle>
    </div>
  );
}

export default PermanentDrawerLeft

PermanentDrawerLeft.defaultProps = defaultProps

const query = graphql`
  query PermanentDrawerLeft {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`