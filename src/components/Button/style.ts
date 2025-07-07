import styled, {css} from "styled-components";
import { mixins } from "../../styles/mixins";

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
    width: ${props => {
        if(props.variant === "primary")
            return "100%";
    }};

    padding: ${props => props.variant === "primary" ? ".75rem": "1rem"};
    color: white;
    ${
        props => {
            switch (props.variant) {
                case "primary":
                    return mixins.button_g;
                case "secondary":
                    return mixins.button_m;
            
                default:
                    break;
            }
        }
    }

    text-align: center;

    ${props => {
        if(props.variant === "secondary" ){
            return css`
                text-transform: uppercase;
                display: flex;
                align-items: "center";
                gap: .0938rem;
                padding: .5rem;
                width: fit-content;
                color: ${props.theme["base-text"]};
                `
        }
        }
    };
    &:hover{
        background: ${props => props.variant === "primary" ? props.theme[buttonVariants.primary_hover] : "none"};
    }
`;