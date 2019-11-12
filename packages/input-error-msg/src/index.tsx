import styled from "styled-components"

declare const tw: (arg: TemplateStringsArray) => string

const InputErrorMsg = styled.p`
  ${tw`text-sm text-red -mt-3`}
`

export default InputErrorMsg
