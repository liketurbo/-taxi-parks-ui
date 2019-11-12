import styled from "styled-components"

declare const tw: (arg: TemplateStringsArray) => string

const Button = styled.button<ButtonProps>`
  ${tw`text-lg font-medium rounded py-2 px-4`}

  transition: background-color 0.15s ease;

  ${({ variant }) => {
    switch (variant) {
      case "success":
        return tw`bg-green hover:bg-green-dark text-grey-lightest`
      case "danger":
        return tw`bg-red hover:bg-red-dark text-grey-lightest`
      default:
        return tw`bg-yellow hover:bg-yellow-dark text-grey-darkest`
    }
  }};
`

export interface ButtonProps {
  variant?: "danger" | "success"
}

export default Button
