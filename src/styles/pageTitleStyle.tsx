import React from 'react'
import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container';
import { config, animated, useSpring } from 'react-spring'

const PageTitle = styled(Container)`
width: 70%;
text-transform: none;
padding: 2rem;
color: ${theme.palette.primary.contrastText}; 
font-size: ${theme.typography.h4.fontSize};
font-weight: ${theme.typography.h4.fontWeight};
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