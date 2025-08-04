import styled from "styled-components";

export const TotalCartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
export const TotalCartDetail = styled.div`
    display: flex;
    justify-items: space-between;
`;
export const Separator = styled.hr`
    margin: 1.5rem 0;
    background-color: ${props => props.theme["base-button"]};
    border: none;
    height: 1px;
`;