import React from "react"
import InputMask, { Props } from "react-input-mask"
import styled from "styled-components"

import InputBase, { InputBaseProps } from "@-taxi-parks-ui/input-base"
import InputContainer from "@-taxi-parks-ui/input-container"
import InputErrorMsg from "@-taxi-parks-ui/input-error-msg"

const SInputPhone = styled(InputMask)`
  ${InputBase}
`

const InputPhone = ({
  ...rest
}: Omit<Props, "mask" | "type"> & InputBaseProps) => (
  <InputContainer error={rest.error}>
    <SInputPhone mask="8 (999) 999-99-99" type="tel" {...rest} />
    {rest.error && <InputErrorMsg>{rest.error}</InputErrorMsg>}
  </InputContainer>
)

export default InputPhone
