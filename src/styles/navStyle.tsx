
import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Box from '@material-ui/core/Box'


const Nav = styled(Box)<{ color: string }>`
a {
  margin-left: 12px;
  padding: 1rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  text-decoration: none;
  color: ${theme.palette.primary.contrastText};
  font-size: ${theme.typography.h4.fontSize};
  font-weight: ${theme.typography.h4.fontWeight};
  &:hover,
  &:focus,
  &.navlink-active {
    color: ${theme.palette.secondary.main};
  }
}
`

export default Nav
