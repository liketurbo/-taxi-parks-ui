import React from "react"

import { storiesOf } from "@storybook/react"

import InputDefault from "./"

storiesOf("Design System|Input", module).add("Default", () => (
  <>
    <InputDefault placeholder="Default" />
    <InputDefault placeholder="Required" required />
    <InputDefault disabled placeholder="Disabled" />
    <InputDefault disabled placeholder="Disabled, Required" required />
    <InputDefault error="Some error" placeholder="Error" />
    <InputDefault error="Some error" placeholder="Error, Required" required />
  </>
))
