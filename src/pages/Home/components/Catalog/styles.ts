import styled from "styled-components";

export const CatalogContainer = styled.div`
    background: ${({theme}) => theme.background};
    padding: 2rem 0 0 0;
`;

export const CatalogOptionsContainer = styled.div`
    margin: 3.375rem 0;
`;

export const Item = styled.div`
    width: 100px;
    height: 100px;
    background: red;
`;