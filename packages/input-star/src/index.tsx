import React from "react"
import styled, { CSSObject } from "styled-components"

declare const tw: (arg: TemplateStringsArray) => CSSObject

const SInputStar = styled.span<InputStarProps>`
  ${tw`text-red mx-1 mt-1`}

  ${props => !props.visible && tw`invisible`}
`

const InputStar = ({ visible }: InputStarProps) => (
  <SInputStar {...{ visible }}>{"*"}</SInputStar>
)

export interface InputStarProps {
  visible?: boolean
}

export default InputStar
