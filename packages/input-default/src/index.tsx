import React, { InputHTMLAttributes } from "react"
import styled, { css } from "styled-components"

import BaseInput from "@-taxi-parks-ui/input-base"

const TextInput = styled.input`
  ${BaseInput}
`

const AreaInput = styled.textarea`
  ${BaseInput}

  height: 6em;
`

export interface InputProps extends InputHTMLAttributes<any> {
  type?: "area" | "text"
}

export default ({ type, ...rest }: InputProps) =>
  type === "area" ? (
    <AreaInput {...rest} />
  ) : (
    <TextInput {...{ type }} {...rest} />
  )
