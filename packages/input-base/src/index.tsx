import { css } from "styled-components"

declare const tw: (arg: TemplateStringsArray) => string

export default css`
  ${tw`p-2 mb-4 w-full rounded`}
`
