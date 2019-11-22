import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

import InputBase, { InputBaseProps } from "@-taxi-parks-ui/input-base"
import InputContainer from "@-taxi-parks-ui/input-container"
import InputErrorMsg from "@-taxi-parks-ui/input-error-msg"

const SInputDefault = styled.input`
  ${InputBase}
`

const InputDefault = ({
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & InputBaseProps) => (
  <InputContainer error={Boolean(rest.error)}>
    <SInputDefault {...rest} />
    {rest.error && <InputErrorMsg>{rest.error}</InputErrorMsg>}
  </InputContainer>
)

export default InputDefault
