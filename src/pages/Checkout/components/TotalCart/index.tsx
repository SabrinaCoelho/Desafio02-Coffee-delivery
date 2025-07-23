import { TextL_Bold, TextM_Regular, TextS_Regular } from "../../../Home/components/Typography/styles";
import { TotalCartContainer, TotalCartDetail } from "./styles";

export function TotalCart(){
    return(
        <TotalCartContainer>
            <TotalCartDetail>
                <TextS_Regular>Total de itens</TextS_Regular>
                <TextM_Regular>R$ 29,70</TextM_Regular>
            </TotalCartDetail>
            <TotalCartDetail>
                <TextS_Regular>Total de itens</TextS_Regular>
                <TextM_Regular>R$ 29,70</TextM_Regular>
            </TotalCartDetail>
            <TotalCartDetail>
                <TextL_Bold>Total de itens</TextL_Bold>
                <TextL_Bold>R$ 29,70</TextL_Bold>
            </TotalCartDetail>
        </TotalCartContainer>
    );
}