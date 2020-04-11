import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container';


const RaisedHeader = styled(Container)`
  padding: 30px 0;
  width: 90%;
  margin: -100px 5% 0px 5%;
  box-shadow: 6px 6px 10px 0px rgb(47, 54, 68, 0.4);
  z-index: 3;
  position: relative;
  background-color: ${theme.palette.primary.contrastText};
  color: ${theme.palette.primary.main};
  display: flex
  flexDirection: column
  minWidth: 0;
  wordWrap: break-word;
  transition: all 300ms linear ; 
  lineHeight: 1;
  justifyContent: 'space-around';
`
export default RaisedHeader