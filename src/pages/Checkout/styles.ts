import styled from "styled-components";

export const CheckoutContainer = styled.div`
    background: ${props => props.theme["background"]};
    display: flex;
`;

export const ShippmentContainer = styled.div`
    max-width: 40rem;
`;

export const AdressContainer = styled.div`
    /* background: red; */
`;

export const AdressLabel = styled.div`
    display: flex;
    background: pink;

    &:first-child{
        color: orange;
    }
`;

export const PaymentContainer = styled.div`

`;

export const SelectedItemstContainer = styled.div`

`;