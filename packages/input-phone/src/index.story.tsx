import React from "react"

import { storiesOf } from "@storybook/react"

import Input from "./"

storiesOf("Design System|Input", module).add("Phone", () => (
  <Input placeholder="Enter phone number" />
))
