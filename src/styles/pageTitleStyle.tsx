import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container';
import { Box, AnimatedBox} from '../elements'

const PageTitle = styled(Container)`
display: grid;
width: 70%;
grid-template-columns: 1fr;
grid-template-rows: 1fr;
grid-template-areas:
'title'   ;
padding: 1rem ;
background-color: ${theme.palette.primary.main};
text-align: center;
margin: -80px 15% 0px 15%;
box-shadow: 5px 5px 7px 0px rgb(47, 54, 68, 0.4);
PageTilePlain: {
  marginLeft: "0px",
  marginRight: "0px"
},

` 
export default PageTitle