import styled   from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'
import Container from '@material-ui/core/Container'

const Description = styled(Container)`
  padding: 1rem;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
  font-size: ${theme.typography.h6.fontSize};
`

export default Description