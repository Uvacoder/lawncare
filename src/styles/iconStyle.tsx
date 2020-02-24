
import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from './reset'


const Icon = styled(animated.div)`
height: ${props => props.theme.sidebarWidth.big} 6rem;
margin: 1rem;

@media (max-width: ${props => props.theme.breakpoints[4]}) {
  height: ${props => props.theme.sidebarWidth.normal} 4rem;
  margin: .3rem;
 }

 @media (max-width: ${props => props.theme.breakpoints[2]}) {
  height: 3rem;
  margin: .2rem;

}

`

export default Icon
