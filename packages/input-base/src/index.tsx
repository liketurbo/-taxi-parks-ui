import { css } from "styled-components"

declare const tw: (arg: TemplateStringsArray) => string

const InputBase = css<InputBaseProps>`
  ${tw`p-2 mb-4 w-full rounded`}

  ${props =>
    props.error &&
    css`
      ${tw`border border-red text-red`}

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
