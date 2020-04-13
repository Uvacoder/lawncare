import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container';
import { Box, AnimatedBox} from '../elements'
import { config, animated, useSpring } from 'react-spring'

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-auto-rows: 40vw;
  grid-row-start: 2;

   [theme.breakpoints.down('md')]:  {
    grid-template-columns: 1fr;
    grid-auto-rows: 35vw;
  }
`

export default Area