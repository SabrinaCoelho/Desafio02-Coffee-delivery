import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const TitleXL = styled.h1`
    ${mixins.title_xl}
    color: ${({theme}) => theme["base-title"]};
`;

export const TitleL = styled.h1`
    ${mixins.title_l}
    color: ${({theme}) => theme["base-title"]};
`;

export const TitleXS = styled.h1`
    ${mixins.title_xs};
    color: ${({theme}) => theme["base-subtitle"]};
`;

export const TextL_Regular = styled.p`
    ${mixins.text_l_regular}
    color: ${({theme}) => theme["base-subtitle"]};
`;

export const TextL_Bold = styled.p`
    ${mixins.text_l_bold}
    color: ${({theme}) => theme["base-subtitle"]};
`;

export const TextM_Regular = styled.p`
    ${mixins.text_m_regular}
    color: ${props => props.theme["base-subtitle"]};
`;
export const TextS_Regular = styled.p`
    ${mixins.text_s}
    color: ${({theme}) => theme["base-label"]};
`;

export const TextTag = styled.p`
    ${mixins.tag}
    color: ${({theme}) => theme["yellow-dark"]};
    display: inline;
`;