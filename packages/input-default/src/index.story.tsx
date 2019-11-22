import React from "react"

import { storiesOf } from "@storybook/react"

import InputDefault from "./"

storiesOf("Design System|Input", module).add("Default", () => (
  <>
    <InputDefault placeholder="Hello, World!" />
    <InputDefault disabled placeholder="Hello, World!" />
    <InputDefault error="Some error" placeholder="Hello, World!" />
  </>
))
