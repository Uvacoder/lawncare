import styled from 'styled-components'
import { animated } from 'react-spring'

const GridStyle = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));

  [theme.breakpoints.up('xl')]: {
    grid-template-columns: 1fr 1fr 1fr;
  }

  [theme.breakpoints.up('lg')]: {
    grid-template-columns: 1fr 1fr;
  }

  [theme.breakpoints.up('xs')]: {
    grid-template-columns: 1fr;
  }
`

export default GridStyle