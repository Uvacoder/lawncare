import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Box from '@material-ui/core/Box'


const SideBarInner = styled(Box)<{ bg: string }>`
  position: fixed;
  height: 100%;
  width: ${theme.sidebar.width.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background: ${theme.palette.primary.main};

`

export default SideBarInner