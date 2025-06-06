import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
    background: ${props => props.theme.background};
    max-width: 74rem;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 2rem 10rem;
    span{
        display: block;
    }
`;

export const CityLocation = styled.div`
    padding: .5rem;
    border-radius: 6px;
    background: ${({theme}) => theme["purple-light"]};
    display: flex;
    align-items: center;
    ${mixins.text_s};
    color: ${({theme}) => theme["purple-dark"]}
`;