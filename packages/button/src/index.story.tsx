import React from "react"

import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"

import Button from "./"

storiesOf("Design System|Button", module)
  .add("primary", () => (
    <>
      <div>
        <Button onClick={action("onClick")} size="sm">
          {"Button"}
        </Button>
        <Button disabled onClick={action("onClick")} size="sm">
          {"Button"}
        </Button>
      </div>
      <div>
        <Button onClick={action("onClick")}>{"Button"}</Button>
        <Button disabled onClick={action("onClick")}>
          {"Button"}
        </Button>
      </div>
      <div>
        <Button onClick={action("onClick")} size="lg">
          {"Button"}
        </Button>
        <Button disabled onClick={action("onClick")} size="lg">
          {"Button"}
        </Button>
      </div>
    </>
  ))
  .add("danger", () => (
    <>
      <div>
        <Button onClick={action("onClick")} size="sm" variant="danger">
          {"Button"}
        </Button>
        <Button disabled onClick={action("onClick")} size="sm" variant="danger">
          {"Button"}
        </Button>
      </div>
      <div>
        <Button onClick={action("onClick")} variant="danger">
          {"Button"}
        </Button>
        <Button disabled onClick={action("onClick")} variant="danger">
          {"Button"}
        </Button>
      </div>
      <div>
        <Button onClick={action("onClick")} size="lg" variant="danger">
          {"Button"}
        </Button>
        <Button disabled onClick={action("onClick")} size="lg" variant="danger">
          {"Button"}
        </Button>
      </div>
    </>
  ))
  .add("success", () => (
    <>
      <div>
        <Button onClick={action("onClick")} size="sm" variant="success">
          {"Button"}
        </Button>
        <Button
          disabled
          onClick={action("onClick")}
          size="sm"
          variant="success"
        >
          {"Button"}
        </Button>
      </div>
      <div>
        <Button onClick={action("onClick")} variant="success">
          {"Button"}
        </Button>
        <Button disabled onClick={action("onClick")} variant="success">
          {"Button"}
        </Button>
      </div>
      <div>
        <Button onClick={action("onClick")} size="lg" variant="success">
          {"Button"}
        </Button>
        <Button
          disabled
          onClick={action("onClick")}
          size="lg"
          variant="success"
        >
          {"Button"}
        </Button>
      </div>
    </>
  ))
