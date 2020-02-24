import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from './reset'


const Main = styled.main`
@media (min-width: calc(${props => props.theme.breakpoints[2]} + 1px)) {
  grid-template-columns: 1fr 1fr  1fr 1fr;
  grid-column-start: 2;
}
`

export default Main
