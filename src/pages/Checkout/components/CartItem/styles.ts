import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CartItemContainer = styled.div`
    width: 23rem;
    background: ${props => props.theme["base-card"]};
    display: flex;
    justify-content: space-between;
`;

export const CartItemImg = styled.div`

`;

export const CartItemInfo = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: center;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: .25rem;
`;

export const CartItemTitle = styled.div`
    ${mixins.text_m_regular}
    color: ${props => props.theme["base-subtitle"]};
`;
export const CartItemButtons = styled.div`
    color: ${props => props.theme["base-subtitle"]};
    display: flex;
    gap: .5rem;
    margin-top: .5rem;
`;
export const CartItemPrice = styled.div`
    color: ${props => props.theme["base-subtitle"]};
    ${mixins.text_m_bold}
    color: ${props => props.theme["base-text"]};
`;