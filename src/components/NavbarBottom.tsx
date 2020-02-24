import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { Icon, Menu, Container} from '@material-ui/core'
import NavBottom from '../styles/navBottomStyle'
import Instagram from './instagram'
import Facebook from './facebook'
import Phone from './phone'
import Email from './email'
import Home from './home'
import Gappsapps from './gappsapps'
import styled from 'styled-components'
import GridIcon from './gridIcon'
import {  Box } from '../elements'

const FooterGrid = styled(Box)`
display: grid;
fixed: bottom;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr;
align-content: baseline;

`

class NavbarBottom extends React.Component {
  render() {

    return (
      <Container disableGutters='true'>
      <FooterGrid >
         <GridIcon><Box><Link><Home /></Link></Box></GridIcon>
         <GridIcon><Box><a href="mailto: jon@lawnsmatter.co.uk?subject=Lawn%20Care%20Enquiry&body=Dear%20Jon,%0d%0dI%20am%20interested%20in%20the%20Lawn%20Care%20Services%20that%20I%20have%20read%20about%20on%20your%20website,%20would%20you%20please%20contact%20me%20to%20book%20a%20lawn%20assessment.%0d%0dMy%20contact%20details%20are...%0d%0dName:%0dAddress:%0dPost%20code:%0dPhone%20number:%0dEmail:%0d%0dKind%20regards,%0d%0d" rel="nofollow"><Email /></a></Box></GridIcon>
         <GridIcon><Box><a href='01384395047' rel="nofollow"><Phone /></a></Box></GridIcon>
         <GridIcon><Box><a href="https://www.facebook.com/lawnsmatter" rel="nofollow"><Facebook /></a></Box></GridIcon>
         <GridIcon><Box><Link to="/instagram"><Instagram /></Link></Box></GridIcon>
         <GridIcon><Box><a href="https://www.gappsapps.co.uk" rel="nofollow"><Gappsapps /></a></Box></GridIcon>

       </FooterGrid>
       </Container>
    )
  }
}

export default NavbarBottom
