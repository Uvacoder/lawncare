
import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from './reset'
import { Box, Flex, AnimatedBox } from '../elements'
import { readableColor } from 'polished'



const SideBarInner = styled(Box)<{ bg: string }>`
  position: relative;
  height: ${props => theme.sidebar.height};
  width: ${props => theme.sidebar.width.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background: ${props => theme.bg};

  @media (max-width: ${props => theme.breakpoints[4]}) {
    width: ${props => theme.sidebar.width.big};
    height: ${props => theme.sidebar.height};
  }

  svg {
    fill: ${props => readableColor(theme.palette.primary.background)};
  }
`
export default SideBarInner
