import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container';
import { Box, AnimatedBox} from '../elements'
import { config, animated, useSpring } from 'react-spring'

const Description = styled(animated.div)`
  padding: 1rem;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
  font-size: ${theme.typography.h6.fontSize};
`

export default Description