import { css, CSSObject } from "styled-components"

declare const tw: (arg: TemplateStringsArray) => CSSObject

const InputBase = css<InputBaseProps>`
  ${tw`p-2 w-full rounded border border-transparent`}

  ${props =>
    props.error &&
    css`
      ${tw`border-red text-red`}

      &::placeholder {
        ${css`
          ${tw`text-red`}
        `}
      }
    `}
`

export interface InputBaseProps {
  error?: string
}

export default InputBase
