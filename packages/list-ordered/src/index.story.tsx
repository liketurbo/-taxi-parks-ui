import { storiesOf } from "@storybook/react"
import React from "react"

import Li from "@-taxi-parks-ui/list-item"

import Lo from "."

storiesOf("Design System|List", module).add("Ordered", () => (
  <Lo>
    <Li>{"Item"}</Li>
    <Li>{"Item"}</Li>
    <Li>
      {" "}
      {"Item"}
      <Lo>
        <Li>{"Item"}</Li>
        <Li>{"Item"}</Li>
        <Li>
          {"Item"}
          <Lo>
            <Li>{"Item"}</Li>
          </Lo>
        </Li>
      </Lo>
    </Li>
    <Li>{"Item"}</Li>
  </Lo>
))
