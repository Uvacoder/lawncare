import styled from 'styled-components'
import { animated} from 'react-spring'

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 250px;

`

export default Area

