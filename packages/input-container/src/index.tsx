import styled, { css, CSSObject } from "styled-components"

declare const tw: (arg: TemplateStringsArray) => CSSObject

const InputContainer = styled.div<InputContainerProps>`
  ${tw`w-full mb-5`}

  ${props =>
    props.error &&
    css`
      ${tw`w-full mb-1`}
    `}
`

export interface InputContainerProps {
  error?: boolean
}

export default InputContainer
