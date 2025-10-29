import styled from "styled-components";

export const SuccessContainer = styled.div`
    background: ${props => props.theme["background"]};
    display: flex;
    gap: 2rem;
    margin-bottom: 15rem;
`;

export const SuccessMessageTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DeliveryRecap = styled.div`
    padding: 2.5rem;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, #DBAC2C, #8047F8) 1;
    /* border-radius: 6px 44px 6px 44px; */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const SuccessImage = styled.div`
    
`;