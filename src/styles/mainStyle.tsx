import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Main = styled.main`
background-color: ${theme.palette.primary.main};
grid-template-columns: ${theme.sidebar.width.big} 1fr;
grid-column-start: 2;

[theme.breakpoints.down('md')]: {
  grid-template-columns:  1fr;
  grid-column-start: 1;  
}
`

export default Main
