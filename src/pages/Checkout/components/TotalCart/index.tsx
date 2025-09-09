import { useContext } from "react";
import { TextL_Bold, TextM_Regular, TextS_Regular } from "../../../Home/components/Typography/styles";
import { TotalCartContainer, TotalCartDetail } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";

export function TotalCart(){
    const {order} = useContext(CartContext);
    return(
        <TotalCartContainer>
            <TotalCartDetail>
                <TextS_Regular>Total de itens</TextS_Regular>
                <TextM_Regular>R$ {order && order.total > 0 ? order.total : "0,00"}</TextM_Regular>{/* TODO ? */}
            </TotalCartDetail>
            <TotalCartDetail>
                <TextS_Regular>Entrega</TextS_Regular>
                <TextM_Regular>R$ {order?.delivery?.fee}</TextM_Regular>
            </TotalCartDetail>
            <TotalCartDetail>
                <TextL_Bold>Total</TextL_Bold>
                <TextL_Bold>R$ 29,70</TextL_Bold>
            </TotalCartDetail>
        </TotalCartContainer>
    );
}