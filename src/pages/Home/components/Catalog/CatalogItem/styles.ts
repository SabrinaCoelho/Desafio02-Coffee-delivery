import styled from "styled-components";
import { mixins } from "../../../../../styles/mixins";

export const CatatalogItemContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    background: ${({theme}) => theme["base-card"]};
    border-radius: 6px 36px 6px 36px;
    padding: 1.25rem;
    text-align: center;

    display: flex;
    flex-direction: column-reverse;
`;

export const Tag = styled.span`
    padding: .25rem .5rem;
    background: ${({theme}) => theme["yellow-light"]};
    color: ${({theme}) => theme["yellow-dark"]};
    text-transform: capitalize;
    border-radius: 100px;
`;

export const TagsContainer = styled.div`
margin-top: .75rem;
`;

export const ItemInfosContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 2.0625rem;
`;

export const SelectItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: .5rem;
    align-items: center;
`;

export const ItemPriceContainer = styled.span`
    ${mixins.text_s}
    color: ${props => props.theme["base-text"]};
`;

export const ItemPrice = styled.span`
    ${mixins.title_m}
    color: ${props => props.theme["base-text"]};
`;