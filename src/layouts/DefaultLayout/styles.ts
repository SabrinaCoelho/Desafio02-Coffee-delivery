import styled from "styled-components";

export const LayoutContainer = styled.div`
    background: ${({theme}) => theme.background};
    max-width: 70rem;
    margin: auto;
    //background: deeppink;

    @media(max-width: 70rem){
        padding: 0 1rem;
    }
`;