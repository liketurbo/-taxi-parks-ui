import React from "react"

import { storiesOf } from "@storybook/react"

import InputArea from "./"

storiesOf("Design System|Input", module).add("Textarea", () => (
  <>
    <InputArea placeholder="Hello, World!" />
    <InputArea disabled placeholder="Hello, World!" />
    <InputArea error="Some error" placeholder="Hello, World!" />
  </>
))
