import styled from 'styled-components'
import { Link } from 'gatsby'

const PageHeader = styled(Link)`
  position: relative;
  > div {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  > backgroundImage {
    transition: all 0.2s ease 0s !important;
  }
  > span {
    z-index: 10;
    color: white;
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 2rem 1rem;
    right: 0;
    text-align: left;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes[4]};
    padding: ${props => props.theme.space[6]};
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    @media (max-width: ${props => props.theme.breakpoints[3]}) {
      font-size: ${theme.fontSizes[3]};
      padding: ${props => props.theme.space[5]};
    }
  }
  &:hover {
    > div img {
      transform: scale(1.2);
    }
  }
`

export default PageHeader
