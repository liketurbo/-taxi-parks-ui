import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

import InputBase, { InputBaseProps } from "@-taxi-parks-ui/input-base"
import InputContainer from "@-taxi-parks-ui/input-container"
import InputErrorMsg from "@-taxi-parks-ui/input-error-msg"

const InputText = styled.input`
  ${InputBase}
`

const InputArea = styled.textarea`
  ${InputBase}

  height: 6em;
`

const InputDefault = ({
  type,
  ...rest
}: InputDefaultProps & InputBaseProps) => {
  switch (type) {
    case "area":
      return (
        <InputContainer error={rest.error}>
          <InputArea {...rest} />
          {rest.error && <InputErrorMsg>{rest.error}</InputErrorMsg>}
        </InputContainer>
      )
    default:
      return (
        <InputContainer error={rest.error}>
          <InputText {...rest} />
          {rest.error && <InputErrorMsg>{rest.error}</InputErrorMsg>}
        </InputContainer>
      )
  }
}

export interface InputDefaultProps extends InputHTMLAttributes<string> {
  type?: "area" | "text"
}

export default InputDefault
