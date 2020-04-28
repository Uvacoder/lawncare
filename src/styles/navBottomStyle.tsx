
import React from 'react'
import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import { Flex} from '../elements'
import { readableColor } from 'polished'


const isPartiallyActive = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) =>
  isPartiallyCurrent ? { className: 'navlink-active navlink' } : { className: 'navlink' }

const PartialNavLink = ({ children, to, ...rest }: { children: React.ReactNode; to: string }) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)

const NavBottom = styled(Flex)<{  color: theme.palette.primary.main }>`
  a {
    text-decoration: none;
    color: ${props => readableColor(props.theme.palette.primary.contrastText)};
    font-size: ${theme.typography.h3.fontSize};
    line-height: 2;
    justify-content: center;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => theme.palette.secondary.main};
    }
  menu {
    text-decoration: none;
    color: ${props => readableColor(props.theme.palette.primary.contrastText)};
    font-size: ${theme.typography.h3.fontSize};
    line-height: 2;
    align-content: center;
    justify-content: center;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => theme.palette.secondary.main};
    }

     [theme.breakpoints.down('md')]:  {
      font-size: ${theme.typography.h3.fontSize};
      margin-left: ${theme.typography.spacing};
    }

    [theme.breakpoints.down('sm')]: {
      font-size: ${theme.typography.h4.fontSize};
      margin-left: ${theme.typography.spacing};
    }

    [theme.breakpoints.only(‘xs’)]: {
      font-size: ${theme.typography.h5.fontSize};
      margin-left: ${theme.typography.spacing};
    }
  }
`

export default NavBottom
