import { defaultTheme } from "../../styles/default";
import { TextL_Regular, TitleL } from "../Home/components/Typography/styles";
import { DeliveryRecap, SuccessContainer, SuccessImage, SuccessMessageTitle } from "./styles";

export function Success(){
    return(
        <SuccessContainer>
            <SuccessMessageTitle>
                <TitleL color={defaultTheme["yellow-dark"]}>Uhu! Pedido confirmado</TitleL>
                <TextL_Regular>Agora é só aguardar que logo o café chegará até você</TextL_Regular>
            </SuccessMessageTitle>
            <div>
                <DeliveryRecap>
                    Teste
                </DeliveryRecap> 
                <SuccessImage></SuccessImage>  
            </div>
        </SuccessContainer>
    )
}