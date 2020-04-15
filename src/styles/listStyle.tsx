import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container';
import { Box, AnimatedBox} from '../elements'
import { config, animated, useSpring } from 'react-spring'

const List = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr;

`

export default List