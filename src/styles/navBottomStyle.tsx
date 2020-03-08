
import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
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

const NavBottom = styled(Flex)<{  color: theme.palette.primary.background }>`
  a {
    text-decoration: none;
    color: ${props => readableColor(props.theme.palette.primary.text)};
    font-size: ${props => props.theme.fontSizes[3]};
    line-height: 2;
    justify-content: center;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => theme.palette.primary.active};
    }
  menu {
    text-decoration: none;
    color: ${props => readableColor(props.theme.palette.primary.background)};
    font-size: ${props => props.theme.fontSizes[3]};
    line-height: 2;
    align-content: center;
    justify-content: center;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => theme.palette.primary.active};
    }

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: ${props => props.theme.fontSizes[0]};
      margin-left: ${props => props.theme.space[2]};
    }

    @media (max-width: ${props => props.theme.breakpoints[1]}) {
      font-size: ${props => props.theme.fontSizes[0]};
      margin-left: ${props => props.theme.space[2]};
    }

    @media (max-width: ${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[0]};
      margin-left: ${props => props.theme.space[2]};
    }
  }
`

export default NavBottom
