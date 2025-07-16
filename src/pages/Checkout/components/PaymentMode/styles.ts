import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";


export const PaymentModeContainer = styled.div`

`;

export const Mode = styled.label`
    display: flex;
    gap: .75rem;
    width: fit-content;
    padding: 1rem;
    border-radius: 6px;
    background: ${props => props.theme["base-button"]};
    ${mixins.button_s}
    text-transform: uppercase;
    color: ${props => props.theme["base-text"]};
`;