import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";


export const PaymentModeContainer = styled.div`
    display: flex;
    gap: .75rem;
`;

export const Mode = styled.span`
    display: flex;
    gap: .75rem;
    width: 100%;
    padding: 1rem;
    border-radius: 6px;
    background: ${props => props.theme["base-button"]};
    ${mixins.button_s}
    text-transform: uppercase;
    color: ${props => props.theme["base-text"]};
    border: none;
    cursor: pointer;
    align-items: center;

    & input{
        display: none;
    }
    & input:checked{
        background: ${props => props.theme["purple-light"]};
    }
`;