
import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from './reset'
import palette from '../gatsby-plugin-theme-ui/palette'

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

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.fontWeights.normal};
  }

  h1 {
    font-size: ${theme.fontSizes[6]};
  }
  h2 {
    font-size: ${theme.fontSizes[5]};
  }
  h3 {
    font-size: ${theme.fontSizes[4]};
  }
  h4 {
    font-size: ${theme.fontSizes[3]};
  }
  h5 {
    font-size: ${theme.fontSizes[2]};
  }
  h6 {
    font-size: ${theme.fontSizes[1]};
  }

  @media (max-width: 600px) {
    font-size: 16px;

    h1 {
      font-size: ${theme.fontSizes[5]};
    }
    h2 {
      font-size: ${theme.fontSizes[4]};
    }
    h3 {
      font-size: ${theme.fontSizes[3]};
    }
    h4 {
      font-size: ${theme.fontSizes[2]};
    }
    h5 {
      font-size: ${theme.fontSizes[1]};
    }
    h6 {
      font-size: ${theme.fontSizes[0]};
    }
  }
}
body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans';
  font-size: 1rem;
  background-color: ${palette.palette.primary.active};
}
a {
  transition: all 0.3s ease-in-out;
  color: ${theme.palette.primary.text};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${theme.palette.primary.active};
  }
}
g { fill: ${theme.palette.primary.active};
}


${reset}
`
export default GlobalStyles
