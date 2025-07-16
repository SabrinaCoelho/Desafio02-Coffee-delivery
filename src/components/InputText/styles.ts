import styled from "styled-components";
import { mixins } from "../../styles/mixins";

interface InputTextProps {
    width: string;
}
export const InputTextContainer = styled.span<InputTextProps>`
    padding: .75rem;
    ${mixins.text_s}
    display: flex;
    justify-content: space-between;
    ${props => props.width === "full" ? "width: 100%" : "min-width: "+props.width};/* IMPROVE */
    background: ${props => props.theme["base-input"]};
    font-style: italic;
    font-size: .75rem;
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