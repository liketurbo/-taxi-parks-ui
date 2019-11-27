import { storiesOf } from "@storybook/react"
import React from "react"

import InputPhone from "."

storiesOf("Design System|Input", module).add("Phone", () => (
  <>
    <InputPhone placeholder="Default" />
    <InputPhone placeholder="Required" required />
    <InputPhone disabled placeholder="Disabled" />
    <InputPhone disabled placeholder="Disabled, Required" required />
    <InputPhone error="Some error" placeholder="Error" />
    <InputPhone error="Some error" placeholder="Error, Required" required />
  </>
))
