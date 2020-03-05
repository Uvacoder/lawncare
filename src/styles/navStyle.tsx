
import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import palette from '../gatsby-plugin-theme-ui/palette'
import reset from './reset'
import { Box, Flex, AnimatedBox } from '../elements'
import { readableColor } from 'polished'

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)

const Nav = styled(Flex)<{  color: palette.palette.primary.background }>`
  a {
    text-decoration: none;
    color: ${props => readableColor(`${palette.palette.primary.background }`)};
    font-size: ${props => props.theme.fontSizes[3]};
    line-height: 2;
    justify-content: center;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => palette.palette.primary.active};
    }
  Link {
    text-decoration: none;
    color: ${props => readableColor(`${palette.palette.primary.text }`)};
    font-size: ${props => props.theme.fontSizes[3]};
    line-height: 2;
    align-content: center;
    justify-content: center;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => palette.palette.primary.active};
    }
    MenuItem {
    text-decoration: none;
    color: ${props => readableColor(`${palette.palette.primary.text }`)};
    background-color: ${props => readableColor(`${palette.palette.primary.background }`)};
    font-size: ${props => props.theme.fontSizes[3]};
    line-height: 2;
    align-content: center;
    justify-content: center;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => palette.palette.primary.active};
    }
    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: ${props => props.theme.fontSizes[2]};
      margin-left: ${props => props.theme.space[4]};
    }

    @media (max-width: ${props => props.theme.breakpoints[1]}) {
      font-size: ${props => props.theme.fontSizes[1]};
      margin-left: ${props => props.theme.space[3]};
    }

    @media (max-width: ${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[0]};
      margin-left: ${props => props.theme.space[2]};
    }
  }
`

export default Nav
