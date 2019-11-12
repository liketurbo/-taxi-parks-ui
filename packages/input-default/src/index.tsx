import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

import InputBase, { InputBaseProps } from "@-taxi-parks-ui/input-base"
import InputErrorMsg from "@-taxi-parks-ui/input-error-msg"

const InputText = styled.input`
  ${InputBase}
`

const InputArea = styled.textarea`
  ${InputBase}

  height: 6em;
`

const InputDefault = ({ type, ...rest }: InputDefaultProps & InputBaseProps) =>
  type === "area" ? (
    <>
      <InputArea {...rest} />
      {rest.error && <InputErrorMsg>{rest.error}</InputErrorMsg>}
    </>
  ) : (
    <>
      <InputText {...{ type }} {...rest} />
      {rest.error && <InputErrorMsg>{rest.error}</InputErrorMsg>}
    </>
  )

export interface InputDefaultProps extends InputHTMLAttributes<string> {
  type?: "area" | "text"
}

export default InputDefault
