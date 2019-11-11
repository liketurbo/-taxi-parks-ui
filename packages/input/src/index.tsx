import React, { InputHTMLAttributes } from "react"
import styled, { css } from "styled-components"

declare const tw: any

const CSSInput = css`
  ${tw`p-2 mb-4 w-full rounded`}
`

const TextInput = styled.input`
  ${CSSInput}
`

const AreaInput = styled.textarea`
  ${CSSInput}

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
