import "tailwindcss/dist/base.min.css"

import { configure } from "@storybook/react"

configure(require.context("../packages/", true, /\.story\.js$/), module)
