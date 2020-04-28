import styled from 'styled-components'
import { animated} from 'react-spring'

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-auto-rows: 40vw;
  grid-row-start: 2;

   [theme.breakpoints.down('md')]:  {
    grid-template-columns: 1fr;
    grid-auto-rows: 35vw;
  }
`

export default Area