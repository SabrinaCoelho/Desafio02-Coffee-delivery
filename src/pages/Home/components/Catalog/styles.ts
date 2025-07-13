import styled from "styled-components";

export const CatalogContainer = styled.div`
    background: ${({theme}) => theme.background};
    padding: 2rem 0 0 0;
`;

export const CatalogOptionsContainer = styled.div`
    margin: 3.375rem 0 9.8125rem 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem 2rem;
`;

export const Item = styled.div`
    width: 100px;
    height: 100px;
    background: red;
`;