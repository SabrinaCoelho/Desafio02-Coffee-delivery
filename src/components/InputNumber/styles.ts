import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const InputNumberContainer = styled.span`
    background: ${props => props.theme["base-button"]};
    padding: .5rem;
    border: none;
    border-radius: 6px;
    text-align: center;
    width: fit-content;
    display: flex;
    gap: .25rem;
`;

export const InputNumberElement = styled.input`
    border: none;

    ${mixins.text_m_regular};
    background: transparent;
    text-align: center;
    width: 2rem;

    color: ${props => props.theme["base-title"]};
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
`;

export const IncreaseDecreaseButton = styled.button`
    color: ${props => props.theme["purple"]};
    border: none;
    background: transparent;
`;