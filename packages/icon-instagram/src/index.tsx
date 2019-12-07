import styled from "styled-components"

import PIconInstagram from "./social-icon_instagram.svg"

const IconInstagram = styled(PIconInstagram)`
  & path {
    fill: #fff;

    transition: fill 0.15s ease;
  }

  &:hover {
    & path {
      fill: url(#rg);
    }
  }
`

export default IconInstagram
