import React, { ButtonHTMLAttributes } from "react"
import styled, { css, CSSObject } from "styled-components"

declare const tw: (arg: TemplateStringsArray) => CSSObject

const SButton = styled.button<ButtonProps>`
  ${tw`text-lg font-medium border rounded py-2 px-4`}

  transition: all 0.15s ease;

  ${({ outline, variant }) => {
    switch (variant) {
      case "danger":
        if (outline)
          return tw`bg-transparent hover:bg-red text-red hover:text-grey-lightest border-red`

        return tw`bg-red hover:bg-red-dark text-grey-lightest border-red hover:border-red-dark`
      case "success":
        if (outline)
          return tw`bg-transparent hover:bg-green text-green hover:text-grey-lightest border-green border-green`

        return tw`bg-green hover:bg-green-dark text-grey-lightest border-green hover:border-green-dark`
      default:
        if (outline)
          return tw`bg-transparent hover:bg-yellow text-yellow hover:text-grey-darkest border-yellow border-yellow`

        return tw`bg-yellow hover:bg-yellow-dark text-grey-darkest border-yellow hover:border-yellow-dark`
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
          case "danger":
            return tw`bg-red-dark border-red-dark text-grey-lightest hover:bg-red-dark`
          case "success":
            return tw`bg-green-dark border-green-dark text-grey-lightest hover:bg-green-dark`
          default:
            return tw`bg-yellow-dark border-yellow-dark text-grey-darkest hover:bg-yellow-dark`
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
  outline?: boolean
}

export default Button
