
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import reset from './reset'


const PBox = styled(AnimatedBox)`
  padding: 1rem;
  margin: .1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.down('xl')}) {
    margin: .1rem;
   }

  @media (max-height: ${theme.breakpoints.down('md')}/2 2fr) {
   margin: .5rem;
  }

`

export default PBox
