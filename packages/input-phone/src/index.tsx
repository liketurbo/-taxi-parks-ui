import React from "react"
import InputMask, { Props } from "react-input-mask"
import styled from "styled-components"

import BaseInput from "@-taxi-parks-ui/input-base"

const PhoneInput = styled(InputMask)`
  ${BaseInput}
`

const InputPhone = ({ ...rest }: Omit<Props, "mask" | "type">) => (
  <PhoneInput mask="8 (999) 999-99-99" type="tel" {...rest} />
)

export default InputPhone
