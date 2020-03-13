
import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui/index'
import reset from './reset'


const SpotlightStyle = styled(section)`
align-items: center;
display: flex;

 .PreviewCompatibleImage {
  order: 1;
  border-radius: 0;
  width: 40%;


}

 .content {
  padding: 2em 4em;
  order: 2;
  max-width: 48em;
  width: 60%;
}

 .&:nth-child(2n) {
  flex-direction: row-reverse;
}

@for $i from 1 through _misc(max-spotlights) {
    $j: 0.075 * $i;

  &:nth-child(#{$i}) {
    background-color: rgba(0,0,0, $j);
  }
}

@include breakpoint('<=large') {
  .Img {
    width: 45%;
  }

  .content {
    width: 55%;
  }
}

@include breakpoint('<=medium') {
  display: block;

  br {
    display: none;
  }

  .Img {
    width: 100%;
  }

  .content {
    @include padding(4em, 3em);
    max-width: none;
    text-align: center;
    width: 100%;
  }
}

  @include breakpoint('<=small') {
    .content {
      @include padding(3em, 2em);
    }
  }
}

`

export default SpotlightStyle
