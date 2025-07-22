import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CartItemContainer = styled.div`
    width: 23rem;
    background: ${props => props.theme["base-card"]};
    display: flex;
`;

export const CartItemImg = styled.div`
`;

export const CartItemTitle = styled.div`
    ${mixins.text_m_regular}
    color: ${props => props.theme["base-subtitle"]};
`;
export const CartItemButtons = styled.div`
    color: ${props => props.theme["base-subtitle"]};
`;
export const CartItemPrice = styled.div`
    color: ${props => props.theme["base-subtitle"]};
`;