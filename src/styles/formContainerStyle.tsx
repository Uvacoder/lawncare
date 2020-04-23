import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container';
import { Box, AnimatedBox} from '../elements'

const FormContainer = styled(Container)`
width: 70%;
text-transform: none;
padding: 2rem;
text-align: center;
margin: 0px 15% 0px 15%;
PageTilePlain: {
  marginLeft: "0px",
  marginRight: "0px"
},

` 
export default FormContainer