import React from "react"

import { storiesOf } from "@storybook/react"

import Loading from "./"

storiesOf("Design System|Loading", module)
  .add("small", () => <Loading size="sm" />)
  .add("medium (default)", () => <Loading />)
  .add("large", () => <Loading size="lg" />)
