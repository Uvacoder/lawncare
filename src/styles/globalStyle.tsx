
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProvider }  from '@material-ui/core/styles'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import reset from './reset'
import { readableColor } from 'polished'

const GlobalStyles = createGlobalStyle`
*::before,
*::after {
  box-sizing: border-box;
}
::selection {
  color: white;
  background-color: #2B2C3E;
}
html {
  box-sizing: border-box;
  border: 0;
  margin: 0;

  h1 {
    font-weight: ${theme.typography.h1.fontWeight};
  }
  h2 {
    font-weight: ${theme.typography.h2.fontWeight};
  }
  h3 {
    font-weight: ${theme.typography.h3.fontWeight};
  }
  h4 {
    font-weight: ${theme.typography.h4.fontWeight};
  }
  h5 {
    font-weight: ${theme.typography.h5.fontWeight};
  }
  h6 {
    font-weight: ${theme.typography.h6.fontWeight};
  }
  h1 {
    font-size: ${theme.typography.h1.fontSize};
  }
  h2 {
    font-size: ${theme.typography.h2.fontSize};
  }
  h3 {
    font-size: ${theme.typography.h3.fontSize};
  }
  h4 {
    font-size: ${theme.typography.h4.fontSize};
  }
  h5 {
    font-size: ${theme.typography.h5.fontSize};
  }
  h6 {
    font-size: ${theme.typography.h6.fontSize};
  }

  @media (max-width: 600px) {
    font-size: 16px;

    h1 {
      font-size: ${theme.typography.h1.fontSize};
    }
    h2 {
      font-size: ${theme.typography.h2.fontSize};
    }
    h3 {
      font-size: ${theme.typography.h3.fontSize};
    }
    h4 {
      font-size: ${theme.typography.h4.fontSize};
    }
    h5 {
      font-size: ${theme.typography.h5.fontSize};
    }
    h6 {
      font-size: ${theme.typography.h6.fontSize};
    }
  }
}
body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans';
  font-size: 1rem;
  background-color: ${theme.palette.primary.main};
}
a {
  transition: all 0.3s ease-in-out;
  color: ${theme.palette.secondary.main};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${theme.palette.secondary.main};
  }
}
g { fill: ${theme.palette.secondary.main};
}
raisedheader {        
  padding: 30px 0;
  margin: -200px 10px 0px 10px;
  box-shadow: 3px 3px 5px 0px rgb(47, 54, 68, 0.4);
  z-index: 3;
  position: relative;
  background-color: ${theme.palette.primary.contrastText};
  color: ${theme.palette.primary.main};
  display: flex
  flexDirection: column
  minWidth: 0;
  wordWrap: break-word;
  transition: all 300ms linear ; 
  a {
    transition: all 0.3s ease-in-out;
    color: ${theme.palette.secondary.main};
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${theme.palette.secondary.main};
    }
  }
}
wrapper {
  display: grid;
  grid-template-columns: ${theme.sidebar.width.big} 1fr;
  [theme.breakpoints.down(‘md')]:{
    grid-template-columns: 1fr;
  }
}
sidebarinner {
  position: fixed;
  height: 100%;
  width: ${theme.sidebar.width.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${theme.palette.primary.main};
 [theme.breakpoints.down(‘lg')]: {
    width: ${theme.sidebar.width.big};
  }
  [theme.breakpoints.down(‘md')]:{
    position: relative;
    width: 100%;
  }
  svg {
    fill: ${props => readableColor(`${theme.palette.primary.main}`)};
  }
}
nav {
  a {
    text-decoration: none;
    color: ${props => readableColor(`${theme.palette.secondary.main}`)};
    font-size: ${theme.typography.h3.letterSpacing};
    line-height: 1.5;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${theme.palette.secondary.main};
    }
    [theme.breakpoints.down(‘md')]: {
      font-size: ${theme.typography.h4.fontSize};
      margin-left: ${theme.typography.h4.letterSpacing};
    }
   [theme.breakpoints.down(‘sm')]: {
      font-size: ${theme.typography.h5.fontSize};
      margin-left: ${theme.typography.h5.letterSpacing};
    }
    [theme.breakpoints.down(‘xs')]: {
      font-size: ${theme.typography.h6.fontSize};
      margin-left: ${theme.typography.h6.letterSpacing};
    }
  }
}
main {
background-color: ${theme.palette.primary.main};

[theme.breakpoints.down('md')]: {
  grid-template-columns: ${theme.sidebar.width.big} 1fr 1fr 1fr 1fr;
  grid-column-start: 2;
}
}
${reset}
`
export default GlobalStyles
