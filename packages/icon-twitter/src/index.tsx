import styled from "styled-components"

import PIconTwitter from "./social-icon_twitter.svg"

const IconTwitter = styled(PIconTwitter)`
  & path {
    fill: #fff;

    transition: fill 0.15s ease;
  }

  &:hover {
    & path {
      fill: #55acef;
    }
  }
`

export default IconTwitter
