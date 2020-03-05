
import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from './reset'
import { Box, Flex, AnimatedBox } from '../elements'
import { readableColor } from 'polished'

const ToolbarTop = styled(Box)<{ bg: string }>`
  flex-direction: row;
  display: flex;  
  flex-wrap: nowrap;
  justify-content: flex-start;
  background: ${props => props.bg};
  height: ${props => props.theme.toolbar.height};
  width: ${props => props.theme.toolbar.width};

  svg {
    fill: ${props => readableColor(`${props.bg}`)};
  }
`
export default ToolbarTop
