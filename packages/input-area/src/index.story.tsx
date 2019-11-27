import { storiesOf } from "@storybook/react"
import React from "react"

import InputArea from "."

storiesOf("Design System|Input", module).add("Textarea", () => (
  <>
    <InputArea placeholder="Default" />
    <InputArea placeholder="Required" required />
    <InputArea disabled placeholder="Required" />
    <InputArea disabled placeholder="Disabled, Required" required />
    <InputArea error="Some error" placeholder="Error" />
    <InputArea error="Some error" placeholder="Error, Required" required />
  </>
))
