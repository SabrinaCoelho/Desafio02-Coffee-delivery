import styled from "styled-components";

export const CartContainer = styled.div`
    background: ${({theme}) => theme["yellow-light"]};
    border-radius: 6px;
    padding: .5rem;
    color: ${({theme}) => theme["yellow-dark"]};
    display: flex;
`;