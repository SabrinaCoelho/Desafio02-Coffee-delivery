import { useContext } from "react";
import { TextL_Bold, TextM_Regular, TextS_Regular } from "../../../Home/components/Typography/styles";
import { TotalCartContainer, TotalCartDetail } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";
import { utils } from "../../../../utils";

export function TotalCart(){
    const {order} = useContext(CartContext);
    return(
        <TotalCartContainer>
            <TotalCartDetail>
                <TextS_Regular>Total de itens</TextS_Regular>
                <TextM_Regular>{utils.formatCurrency(order?.productsTotal)}</TextM_Regular>{/* TODO ? */}
            </TotalCartDetail>
            <TotalCartDetail>
                <TextS_Regular>Entrega</TextS_Regular>
                <TextM_Regular>{utils.formatCurrency(order?.deliveryFee)}</TextM_Regular>
            </TotalCartDetail>
            <TotalCartDetail>
                <TextL_Bold>Total</TextL_Bold>
                <TextL_Bold>{utils.formatCurrency(order?.totalOrderAmount)}</TextL_Bold>
            </TotalCartDetail>
        </TotalCartContainer>
    );
}