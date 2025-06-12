import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

type AdvantageItemIconVariant = "yellow-dark" | "yellow" | "base-text" | "purple";

interface AdvantageItemIconProp {
    varaint: AdvantageItemIconVariant
}

export const HeroContainer = styled.div`
    /* background: ${({theme}) => theme.background};
    max-width: 70rem;
    margin: auto;
    display: flex;
    width: 100%; */
`;

export const TextHeroContainer = styled.div`
    /* background: lime; */
    margin-top: 5.875rem;
    margin-bottom: 6.75rem;
    display: grid;
    gap: 4.125rem 3.5rem;
    grid-template-columns: auto auto;
    grid-template-areas:
        "a c"
        "b c";
    
    @media (max-width: 768px){
        grid-template-areas:
        "a"
        "c"
        "b";
        grid-template-columns: 1fr;
    }
`;

export const ImageHeroContainer = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 100%;
        image-rendering: smooth;
    }
    grid-area: c;

    @media (max-width: 768px){
        justify-content: center;
    }
`;

export const TitleHeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    grid-area: a;

    @media (max-width: 768px){
        text-align: center;
    }
`;

export const AdvantagesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .75rem 0;

    grid-area: b;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const AdvantageItem = styled.p`
    ${mixins.text_m_regular}
    display: flex;
    align-items: center;
    gap: .75rem;
`;

export const AdvantageItemIcon = styled.span<AdvantageItemIconProp>`
    background: ${(props) => props.theme[props.varaint]};
    border-radius: 1000px;
    padding: .5rem;
    display: inline-flex;
`;