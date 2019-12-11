import { storiesOf } from "@storybook/react"
import React from "react"

import Button, { ButtonProps } from "."

const ButtonBundle = ({
  variant,
  outline,
}: {
  variant: ButtonProps["variant"]
  outline?: ButtonProps["outline"]
}) => (
  <>
    <div>
      <Button
        size="sm"
        {...{
          outline,
          variant,
        }}
      >
        {"Button"}
      </Button>
      <Button
        disabled
        size="sm"
        {...{
          outline,
          variant,
        }}
      >
        {"Button"}
      </Button>
    </div>
    <div>
      <Button
        {...{
          outline,
          variant,
        }}
      >
        {"Button"}
      </Button>
      <Button
        disabled
        {...{
          outline,
          variant,
        }}
      >
        {"Button"}
      </Button>
    </div>
    <div>
      <Button
        size="lg"
        {...{
          outline,
          variant,
        }}
      >
        {"Button"}
      </Button>
      <Button
        disabled
        size="lg"
        {...{
          outline,
          variant,
        }}
      >
        {"Button"}
      </Button>
    </div>
    {!outline && <ButtonBundle outline {...{ variant }} />}
  </>
)

storiesOf("Design System|Button", module)
  .add("primary", () => <ButtonBundle variant="primary" />)
  .add("danger", () => <ButtonBundle variant="danger" />)
  .add("success", () => <ButtonBundle variant="success" />)
  .add("warning", () => <ButtonBundle variant="warning" />)
