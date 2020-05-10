import React from 'react'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import LogoLarge from './logoLarge'
import Gappsapps from './gappsapps'
import IconButtonBar from './IconButtonBar'
import SideBarInner from  '../styles/sideBarInnerStyle'
import Nav from '../styles/navStyle'
import MenuOptions from '../components/MenuOptions'
import Box from '@material-ui/core/Box'



const PermanentDrawerLeft = ({ children, color }: PermanentDrawerLeftProps) => {
  return (
    <Box >
      <SideBarInner>
          <LogoLarge />
          <Nav>
            <ListItem>
              <MenuOptions />
            </ListItem>
          </Nav>
          <br />
          <Divider />
          <IconButtonBar />
          <Divider />
          <br />
          <Nav href="https://www.gappsapps.co.uk" 
          rel="nofollow">
            <ListItem button  aria-label="Link to the developer of this website Gappsapps" >
              <Gappsapps />
            </ListItem>
          </Nav>
      </SideBarInner>
    </Box>
  );
}

export default PermanentDrawerLeft
