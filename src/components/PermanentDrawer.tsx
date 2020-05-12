import React from 'react'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import Logo from './logo'
import Gappsapps from './gappsapps'
import IconButtonBar from './IconButtonBar'
import Nav from '../styles/navStyle'
import MenuOptions from '../components/MenuOptions'

const PermanentDrawerLeft = ({ children, color }: PermanentDrawerLeftProps) => {
  return (
    <div >
          <Logo />
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
    </div>
  );
}

export default PermanentDrawerLeft
