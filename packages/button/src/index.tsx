import React, { ButtonHTMLAttributes } from "react"
import styled, { css, CSSObject } from "styled-components"

declare const tw: (arg: TemplateStringsArray) => CSSObject

const SButton = styled.button<ButtonProps>`
  ${tw`text-lg font-medium rounded py-2 px-4`}

  transition: background-color 0.15s ease;

  ${({ variant }) => {
    switch (variant) {
      case "danger":
        return tw`bg-red hover:bg-red-dark text-grey-lightest`
      case "success":
        return tw`bg-green hover:bg-green-dark text-grey-lightest`
      default:
        return tw`bg-yellow hover:bg-yellow-dark text-grey-darkest`
    }
  }};

  ${({ size }) => {
    switch (size) {
      case "sm":
        return tw`text-base font-normal py-1 px-3`
      case "lg":
        return tw`text-xl font-semibold py-3 px-5`
      default:
        return tw`text-lg font-medium py-2 px-4`
    }
  }};

  ${props =>
    props.disabled &&
    css`
      ${tw`cursor-default`}

      ${() => {
        switch (props.variant) {
          case "success":
            return tw`bg-green-dark`
          case "danger":
            return tw`bg-red-dark`
          default:
            return tw`bg-yellow-dark`
        }
      }}
    `}
`

const Button = ({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => (
  <SButton {...rest} />
)

export interface ButtonProps {
  variant?: "primary" | "danger" | "success"
  size?: "sm" | "md" | "lg"
}

export default Button
