
import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from './reset'


const PBox = styled(AnimatedBox)`
  padding: 1rem;
  margin: .1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    margin: .1rem;
   }

  @media (max-height: ${props => props.theme.breakpoints[2]}/2 2fr) {
   margin: .5rem;
  }

`

export default PBox
