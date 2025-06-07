import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
    background: ${props => props.theme.background};
    max-width: 70rem;
    display: flex;
    align-items: center;

    justify-content: space-between;
    padding: 2rem 0.5rem;

    margin: auto;
    span{
        display: block;
    }
    div{
        display: flex;
    }
    
`;

export const CityLocation = styled.div`
    padding: .5rem;
    border-radius: 6px;
    background: ${({theme}) => theme["purple-light"]};
    display: flex;
    align-items: center;
    ${mixins.text_s};
    color: ${({theme}) => theme["purple-dark"]};
    gap: .25rem;
    margin-right: 0.75rem;
`;