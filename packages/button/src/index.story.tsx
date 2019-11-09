import React from "react"

import Button from "./"

export default {
  component: Button,
  title: "Design System|Button",
}

export const primary = () => <Button>{"Button"}</Button>

export const danger = () => <Button variant="danger">{"Button"}</Button>

export const success = () => <Button variant="success">{"Button"}</Button>
