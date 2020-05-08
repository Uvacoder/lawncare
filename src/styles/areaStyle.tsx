import styled from 'styled-components'
import { animated} from 'react-spring'

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 350px;

`

export default Area

