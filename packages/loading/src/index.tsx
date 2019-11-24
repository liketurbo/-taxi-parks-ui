import React from "react"
import styled, { CSSObject, keyframes } from "styled-components"

import colors from "@-taxi-parks-ui/theme-colors"

declare const tw: (arg: TemplateStringsArray) => CSSObject

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`

const SLoading = styled.div<LoadingProps>`
  ${tw`overflow-hidden border-solid border-white rounded-full`}

  ${({ size }) => {
    switch (size) {
      case "sm":
        return tw`w-4 h-4 border`
      case "lg":
        return tw`w-16 h-16 border-4`
      default:
        return tw`w-8 h-8 border-2`
    }
  }};

  text-indent: 100%;
  border-top-color: ${colors.yellow};
  animation: ${rotate} 0.75s infinite ease;
`

const Loading = ({ size }: LoadingProps) => (
  <SLoading {...{ size }}>{"Loading..."}</SLoading>
)

export interface LoadingProps {
  size?: "sm" | "md" | "lg"
}

export default Loading
