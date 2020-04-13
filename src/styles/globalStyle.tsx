
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

${reset}
`
export default GlobalStyles
