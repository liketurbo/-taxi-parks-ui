import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

import BaseInput from "@-taxi-parks-ui/input-base"

const TextInput = styled.input`
  ${BaseInput}
`

const AreaInput = styled.textarea`
  ${BaseInput}

  height: 6em;
`

const InputDefault = ({ type, ...rest }: InputProps) =>
  type === "area" ? (
    <AreaInput {...rest} />
  ) : (
    <TextInput {...{ type }} {...rest} />
  )

export interface InputProps extends InputHTMLAttributes<string> {
  type?: "area" | "text"
}

export default InputDefault
