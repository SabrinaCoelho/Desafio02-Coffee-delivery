import styled from "styled-components";

export const SuccessContainer = styled.div`
    /* background: ${props => props.theme["background"]};
    display: flex;
    gap: 2rem;
    margin-bottom: 15rem; */
`;

export const SuccessMessageTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DeliveryRecapContainer = styled.div`
    border: 2px solid transparent;
    padding: 2.5rem;
    border-radius: 6px 44px 6px 44px;
    background-image:
        linear-gradient(white, white), linear-gradient(to right, #DBAC2C, #8047F8);
    background-origin: border-box;
    background-clip: padding-box, border-box;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: -webkit-fill-available;
`;

export const DeliveryRecapInfo = styled.div`
    display: flex;
    gap: .75rem;
`;

export const IconCircleBox = styled.div`
    padding: 0.5rem;
    background-color: ${props => props.color};
    border-radius: 50%;
    display: flex;
    align-items: center;
`;

export const SuccessContent = styled.div`
    display: flex;
    margin-top: 2.5rem;
    //justify-content: space-between;
    gap: 6.375rem;
`;
export const SuccessImage = styled.div`
    max-width: 30.75rem;
`;