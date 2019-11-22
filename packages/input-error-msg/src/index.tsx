import styled, { CSSObject } from "styled-components"

declare const tw: (arg: TemplateStringsArray) => CSSObject

const InputErrorMsg = styled.p`
  ${tw`text-sm text-red leading-none`}
`

export default InputErrorMsg
