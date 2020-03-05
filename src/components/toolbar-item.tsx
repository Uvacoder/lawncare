import styled from 'styled-components'
import { Link } from 'gatsby'

const ToolbarItem = styled(Link)`
  position: fixed;
  > div {
    position: absolute !important;
 
  }
  > div img {
    transition: all 0.2s ease 0s !important;
  }
  > span {
    z-index: 1;
    color: white;
    position: absolute;


  &:hover {
    > div img {
      transform: scale(1.2);
    }
  }
`

export default ToolbarItem
