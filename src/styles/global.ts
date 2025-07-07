import { createGlobalStyle } from "styled-components";
import { mixins } from "./mixins";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
    }
    body{
        /* background: ${props => props.theme["yellow"]}; */
        color: ${props => props.theme["base-title"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button{
        font-family: ${mixins.text_m_regular}
    }
    @media(max-width: 768px){
        html{
            font-size: 87.5%;
        }
        body{
            background: yellow;
        }
    }
`