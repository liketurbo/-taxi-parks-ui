import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

import InputBase, { InputBaseProps } from "@-taxi-parks-ui/input-base"
import PInputContainer from "@-taxi-parks-ui/input-container"
import PInputErrorMsg from "@-taxi-parks-ui/input-error-msg"
import PInputStar from "@-taxi-parks-ui/input-star"

const SInputContainer = styled(PInputContainer)`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: auto 1fr;
`

const SInputErrorMsg = styled(PInputErrorMsg)`
  grid-row: 2;
  grid-column: 2 / -1;
`

const SInputStar = styled(PInputStar)`
  grid-row: 1;
  grid-column: 1;
`

const SInputDefault = styled.input`
  ${InputBase}

  grid-row: 1;
  grid-column: 2 / -1;
`

const InputDefault = ({
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & InputBaseProps) => (
  <SInputContainer error={Boolean(rest.error)}>
    <SInputStar visible={rest.required} />
    <SInputDefault {...rest} />
    {rest.error && <SInputErrorMsg>{rest.error}</SInputErrorMsg>}
  </SInputContainer>
)

export default InputDefault
