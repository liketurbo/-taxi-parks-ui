import React from "react"

import { storiesOf } from "@storybook/react"

import Input from "./"

storiesOf("Design System|Input", module)
  .add("Default", () => <Input placeholder="Hello, World!" />)
  .add("Textarea", () => <Input placeholder="Hello, World!" type="area" />)
