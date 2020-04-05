import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../gatsby-theme-material-ui-top-layout/theme'

import reset from './reset'


const Main = styled.main`
background-color: ${theme.palette.primary.main};

[theme.breakpoints.down('md')]: {
  grid-template-columns: ${theme.sidebar.width.big} 1fr 1fr 1fr 1fr;
  grid-column-start: 2;
}
`

export default Main
