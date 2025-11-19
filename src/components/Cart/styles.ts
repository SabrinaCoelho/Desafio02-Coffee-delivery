import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CartIconContainer = styled.div`
    background: ${({theme}) => theme["yellow-light"]};
    border-radius: 6px;
    padding: .5rem;
    color: ${({theme}) => theme["yellow-dark"]};
    display: flex;
    position: relative;
`;

export const CartItemsQuantity = styled.span`
    background-color: ${props => props.theme["yellow-dark"]};
    position: absolute;
    color: ${props => props.theme["white"]};
    ${mixins.text_xs}
    min-width: 1.25rem;
    text-align: center;
    line-height: 1.375rem;
    border-radius: 50%;
    right: -10px;
    top: -10px;
`;