import styled, {css} from "styled-components";
import { mixins } from "../../styles/mixins";


const BaseButton = styled.button`
    border: none;
    border-radius: 6px;
    text-align: center;
`;

export const PrimaryButton = styled(BaseButton)`
    width: 100%;
    background: ${props => props.theme.yellow};
    padding: .75rem;
    color: white;
    cursor: pointer;
    ${mixins.button_g};

    &:hover{
        background: ${props => props.theme["yellow-dark"]};
    }
`;

export const SecondaryButton = styled(BaseButton)`
    ${mixins.button_s};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: .0938rem;
    padding: .5rem;
    width: fit-content;
    background: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    cursor: pointer;

    &:hover{
        background: ${props => props.theme["base-hover"]};
    }
    &:first-child{
        color: ${props => props.theme["purple"]};
    }
`;

export const IconButton = styled(BaseButton)`
    padding: .5rem;
    display: flex;
    color: ${props => props.theme["white"]};
    background: ${props => props.theme["purple-dark"]};
    cursor: pointer;

    &:hover{
        background: ${props => props.theme["purple"]};
    }
`;