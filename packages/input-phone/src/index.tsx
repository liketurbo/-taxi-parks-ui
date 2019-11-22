import React from "react"
import InputMask, { Props } from "react-input-mask"
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

const SInputPhone = styled(InputMask)`
  ${InputBase}

  grid-row: 1;
  grid-column: 2 / -1;
`

const InputPhone = ({
  ...rest
}: Omit<Props, "mask" | "type"> & InputBaseProps) => (
  <SInputContainer error={Boolean(rest.error)}>
    <SInputStar visible={rest.required} />
    <SInputPhone mask="8 (999) 999-99-99" type="tel" {...rest} />
    {rest.error && <SInputErrorMsg>{rest.error}</SInputErrorMsg>}
  </SInputContainer>
)

export default InputPhone
