import React from "react"

import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"

import Button from "./"

storiesOf("Design System|Button", module)
  .add("Primary", () => (
    <>
      <Button onClick={action("onClick")}>{"Button"}</Button>
      <Button disabled onClick={action("onClick")}>
        {"Button"}
      </Button>
    </>
  ))
  .add("Success", () => (
    <>
      <Button onClick={action("onClick")} variant="success">
        {"Button"}
      </Button>
      <Button disabled onClick={action("onClick")} variant="success">
        {"Button"}
      </Button>
    </>
  ))
  .add("Danger", () => (
    <>
      <Button onClick={action("onClick")} variant="danger">
        {"Button"}
      </Button>
      <Button disabled onClick={action("onClick")} variant="danger">
        {"Button"}
      </Button>
    </>
  ))
