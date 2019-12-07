import styled from "styled-components"

import PIconFacebook from "./social-icon_facebook.svg"

const IconFacebook = styled(PIconFacebook)`
  & path {
    fill: #fff;

    transition: fill 0.15s ease;
  }

  &:hover {
    & path {
      fill: #3578e5;
    }
  }
`

export default IconFacebook
