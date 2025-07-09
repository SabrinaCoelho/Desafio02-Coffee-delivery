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
    ${mixins.button_g};

    &:hover{
        background: ${props => props.theme["yellow-dark"]};
    }
`;

export const SecondaryButton = styled(BaseButton)`
    ${mixins.button_m};
    text-transform: uppercase;
    display: flex;
    align-items: "center";
    gap: .0938rem;
    padding: .5rem;
    width: fit-content;
    color: ${props => props.theme["base-text"]};

    &:hover{
        background: ${props => props.theme["base-hover"]};
    }
`;

export const IconButton = styled(BaseButton)`
    padding: .5rem;
    display: flex;
    color: ${props => props.theme["white"]};
    background: ${props => props.theme["purple-dark"]};

    &:hover{
        background: ${props => props.theme["purple"]};
    }
`;