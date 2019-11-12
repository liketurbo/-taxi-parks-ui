import React from "react"

import { storiesOf } from "@storybook/react"

import InputPhone from "./"

storiesOf("Design System|Input", module).add("Phone", () => (
  <>
    <InputPhone placeholder="Enter phone number" />
    <InputPhone error="Some error" placeholder="Enter phone number" />
  </>
))
