import React from "react"

import { storiesOf } from "@storybook/react"

import Button from "./"

storiesOf("Design System|Button", module)
  .add("Primary", () => <Button>{"Button"}</Button>)
  .add("Success", () => <Button variant="success">{"Button"}</Button>)
  .add("Danger", () => <Button variant="danger">{"Button"}</Button>)
