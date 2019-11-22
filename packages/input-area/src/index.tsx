import React, { TextareaHTMLAttributes } from "react"
import styled from "styled-components"

import InputBase, { InputBaseProps } from "@-taxi-parks-ui/input-base"
import InputContainer from "@-taxi-parks-ui/input-container"
import InputErrorMsg from "@-taxi-parks-ui/input-error-msg"

const SInputArea = styled.textarea`
  ${InputBase}

  height: 6em;
`

const InputArea = ({
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement> & InputBaseProps) => (
  <InputContainer error={Boolean(rest.error)}>
    <SInputArea {...rest} />
    {rest.error && <InputErrorMsg>{rest.error}</InputErrorMsg>}
  </InputContainer>
)

export default InputArea
