import React from "react"

import { storiesOf } from "@storybook/react"

import InputDefault from "./"

storiesOf("Design System|Input", module)
  .add("Default", () => (
    <>
      <InputDefault placeholder="Hello, World!" />
      <InputDefault error="Some error" placeholder="Hello, World!" />
    </>
  ))
  .add("Textarea", () => (
    <>
      <InputDefault placeholder="Hello, World!" type="area" />
      <InputDefault
        error="Some error"
        placeholder="Hello, World!"
        type="area"
      />
    </>
  ))
