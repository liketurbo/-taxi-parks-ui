import styled from "styled-components"

import PIconOk from "./social-icon_ok.svg"

const IconOk = styled(PIconOk)`
  & path {
    fill: white;

    transition: fill 0.15s ease;
  }

  &:hover {
    & path {
      fill: #ee8208;
    }
  }
`

export default IconOk
