import styled from "styled-components"

import PIconTelegram from "./social-icon_telegram.svg"

const IconTelegram = styled(PIconTelegram)`
  & path {
    fill: #fff;

    transition: fill 0.15s ease;
  }

  &:hover {
    & path {
      fill: #31a9dd;
    }
  }
`

export default IconTelegram
