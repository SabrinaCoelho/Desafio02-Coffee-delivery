import styled from "styled-components";

export const CheckoutContainer = styled.div`
    background: ${props => props.theme["background"]};
    display: flex;
    gap: 2rem;
`;

export const ShippmentContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    gap: .9375rem;
`;

export const BaseShippmentContainer = styled.div`
    padding: 2.5rem;
    background: ${props => props.theme["base-card"]};
    width: 100%;
    border-radius: 6px;
`;
export const AdressContainer = styled(BaseShippmentContainer)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const AdressLabel = styled.div`
    display: flex;
    gap: .5rem;

    &:first-child{
        color: ${props => props.theme["yellow-dark"]};
    }
`;
export const PaymentLabel = styled.div`
    display: flex;
    gap: .5rem;

    &:first-child{
        color: ${props => props.theme["purple"]};
    }
`;

export const PaymentContainer = styled(BaseShippmentContainer)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const SelectedItemstContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 44px 6px 44px;
    background: ${props => props.theme["base-card"]};
    
`;