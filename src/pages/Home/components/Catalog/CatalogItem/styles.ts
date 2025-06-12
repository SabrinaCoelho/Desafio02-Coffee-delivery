import styled from "styled-components";

export const CatatalogItemContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    background: ${({theme}) => theme["base-card"]};
    border-radius: 6px 36px 6px 36px;
    padding: 1.25rem;
    text-align: center;
`;

export const Tag = styled.span`
    padding: .25rem .5rem;
    background: ${({theme}) => theme["yellow-light"]};
    color: ${({theme}) => theme["yellow-dark"]};
    text-transform: capitalize;
    border-radius: 100px;
`;