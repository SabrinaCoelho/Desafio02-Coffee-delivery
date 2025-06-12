import styled from "styled-components";

export const HomeContainer = styled.div`
    background: ${({theme}) => theme.background};
    max-width: 70rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
`;