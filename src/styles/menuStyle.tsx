import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import MenuList from '@material-ui/core/MenuList'

const MenuStyle = styled(MenuList)`
padding-top: 0;
padding-bottom: 0;
display: flex;
flex-direction: column;
background: ${theme.palette.primary.main};
a {
padding: 0.5rem;
display: flex;
flex-wrap: nowrap;
flex-direction: column;
text-decoration: none;
color: ${theme.palette.primary.contrastText};
font-size: ${theme.typography.h5.fontSize};
font-weight: ${theme.typography.h5.fontWeight};
&:hover;
&:focus;
&.navlink-active {
  color: ${theme.palette.secondary.main};
}
}
`

export default MenuStyle

