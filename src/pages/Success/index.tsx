import { defaultTheme } from "../../styles/default";
import { TitleL } from "../Home/components/Typography/styles";
import { SuccessContainer } from "./styles";

export function Success(){
    return(
        <SuccessContainer>
            <TitleL color={defaultTheme["yellow-dark"]}>Uhu! Pedido confirmado</TitleL>
        </SuccessContainer>
    )
}