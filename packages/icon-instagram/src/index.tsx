import React from "react"
import styled, { CSSObject } from "styled-components"

import PIconInstagram from "./social-icon_instagram.svg"

declare const tw: (arg: TemplateStringsArray) => CSSObject

const Container = styled.div`
  ${tw`relative`}
`

const IconInstagramBleached = styled(PIconInstagram)`
  ${tw`absolute opacity-100`}

  transition: opacity 0.15s ease;

  & path {
    fill: white;
  }

  &:hover {
    ${tw`opacity-0`}
  }
`

const IconInstagramColored = styled(PIconInstagram)`
  ${tw`absolute`}

  & path {
    fill: url(#a);
  }
`

const IconInstagram = () => (
  <Container>
    <IconInstagramColored />
    <IconInstagramBleached />
  </Container>
)

export default IconInstagram
