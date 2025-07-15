import styled from "styled-components";
import { mixins } from "../../styles/mixins";

// interface InputText {}
export const InputTextContainer = styled.span`
    padding: .75rem;
    ${mixins.text_s}
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: ${props => props.theme["base-input"]};
    font-style: italic;
    border-radius: 4px;
    color: ${props => props.theme["base-label"]};

    &:focus-within{
        border: 2px solid ${props => props.theme["yellow-dark"]};
        color: ${props => props.theme["base-text"]};
    }
`;

export const Text = styled.input`
    border: none;
    background-color: inherit;
    ${mixins.text_s}
    width: 100%;
`;