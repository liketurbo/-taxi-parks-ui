import styled, { css, CSSObject } from "styled-components"

import spacing from "@-taxi-parks-ui/theme-spacing"

declare const tw: (arg: TemplateStringsArray) => CSSObject

const ContainerRaw = css`
  padding: 0 calc(50% - ${spacing["112"]});
  border: ${spacing["4"]} solid transparent;
  border-top-width: 0;
  border-bottom-width: 0;

  ${tw`py-12`}
`

const Container = styled.section`
  ${ContainerRaw}
`

export { ContainerRaw }

export default Container
