
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import reset from './reset'


const Icon = styled(animated.div)`
height: ${theme.sidebar.width.big} 6rem;
margin: 1rem;

[theme.breakpoints.up('xl')]:  {
  height: 0 4rem;
  margin: .3rem;
 }

  [theme.breakpoints.down('md')]:  {
  height: 3rem;
  margin: .2rem;

}

`

export default Icon
