import styled from "styled-components"

import PIconVk from "./social-icon_vk.svg"

const IconVk = styled(PIconVk)`
  & path {
    fill: #fff;

    transition: fill 0.15s ease;
  }

  &:hover {
    & path {
      fill: #5b88bd;
    }
  }
`

export default IconVk
