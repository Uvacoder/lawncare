import React from 'react'
import { config, animated, useSpring } from 'react-spring'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import theme from '../gatsby-plugin-theme-ui/index'
import { Box, AnimatedBox } from '../elements'
import { transparentize, readableColor } from 'polished'
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import BackgroundImage from 'gatsby-background-image'
import GridItem from '../components/grid-item'




const RaisedHeader = styled(Container)`
  padding: 30px 0;
  margin: -300px 10px 140px 10px;
  box-shadow: 0 16px 16px 2px rgba(43,44,62, 0.14), 0 6px 30px 5px rgba(43,44,62, 0.12), 0 8px 10px 5px rgba(43,44,62, 0.2), 0 8px 10px 5px rgba(43,44,62, 0.2);
  border-radius: 16px;
  z-index: 3;
  position: relative;
  background-color: ${props => props.theme.palette.primary.text};
  color: ${props => props.theme.palette.primary.background};
  display: flex
  flexDirection: column
  minWidth: 0;
  wordWrap: break-word;
  fontSize: 1.5rem ;
  transition: all 300ms linear ; 
`

const PageTitle = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  'titlepart1 titlepart2'
  'title'   ;
  padding: 1rem ;
  background-color: ${props => props.theme.palette.primary.background};
  text-align: center;
  margin: -80px 25% 20px 25%;
  box-shadow: 0 16px 16px 2px rgba(11, 67, 30, 0.14), 0 6px 30px 5px rgba(11, 67, 30, 0.12), 0 8px 10px 5px rgba(11, 67, 30, 0.2), 0 8px 10px 5px rgba(11, 67, 30, 0.2);
  PageTilePlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },



` 
const TitlePart1 = styled(GridItem)`
  grid-area: titlepart1;
  color: ${props => props.theme.palette.primary.active}; 
  text-transform: none;
 `

const TitlePart2 = styled(GridItem)`
  grid-area: titlepart2;
  color: ${props => props.theme.palette.primary.text}; 
  text-transform: none;
 `

const HorizontalImg = styled(Img)`
  grid-area: logo;

`
const Title = styled(GridItem)`
  grid-area: title;
  color: ${props => props.theme.palette.primary.active}; 

`