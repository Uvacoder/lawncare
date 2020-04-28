
import React from 'react'
import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import { Flex } from '../elements'

const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)

const Nav = styled(Flex)<{  color: theme.palette.primary.background }>`
  a {
    text-decoration: none;
    color: ${theme.palette.primary.background};
    font-size: ${theme.typography.h2.fontSize};
    line-height: 2;
    justify-content: center;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => theme.palette.secondary.main};
    }
  Link {
    text-decoration: none;
    color: ${theme.palette.primary.contrastText};
    font-size: ${theme.typography.h2.fontSize};
    line-height: 2;
    align-content: center;
    justify-content: center;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => theme.palette.secondary.main};
    }
    MenuItem {
    text-decoration: none;
    color: ${theme.palette.primary.contrastText};
    background-color: ${theme.palette.primary.background};
    font-size: ${theme.typography.h2.fontSize};
    font-weight: ${theme.typography.h2.fontWeight};
    line-height: 2;
    align-content: center;
    justify-content: center;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${theme.palette.secondary.main};
    }
     [theme.breakpoints.down('md')]:  {
      font-size: ${theme.typography.h2.fontSize};
      margin-left: ${theme.typography.spacing};
    }

    [theme.breakpoints.down('sm')]: {
      font-size: ${theme.typography.h4.fontSize};
      margin-left: ${theme.typography.spacing};
    }

    [theme.breakpoints.only('xs')]: {
      font-size: ${theme.typography.h5.fontSize};
      margin-left: ${theme.typography.spacing};
    }
  }
`

export default Nav
