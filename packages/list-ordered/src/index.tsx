import styled, { CSSObject } from "styled-components"

declare const tw: (arg: TemplateStringsArray) => CSSObject

const Lo = styled.ol`
  ${tw`ml-1`}

  counter-reset: item;

  li {
    ::before {
      content: counters(item, ".") ". ";
      counter-increment: item;
    }
  }

  > li ol {
    ${tw`ml-2`}
  }
`

export default Lo
