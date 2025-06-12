import styled, {css} from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "icon";

interface ButtonContainerProps{
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: "yellow",
    primary_hover: "yellow-dark",
    secondary: "base-button",
    secondary_hover: "base-hover",
    icon: "purple-dark",
    icon_hover: "purple"
} as const;

export const ButtonContainer = styled.div<ButtonContainerProps>`
    border-radius: 6px;

    background: ${props => props.theme[buttonVariants[props.variant]]};

    &:hover{
        background: ${props => buttonVariants[props.variant]};
    }
`;