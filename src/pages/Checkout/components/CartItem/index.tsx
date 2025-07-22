import { TrashIcon } from "@phosphor-icons/react";
import { SecondaryButton } from "../../../../components/Button/style";
import { InputNumber } from "../../../../components/InputNumber";
import { CartItemButtons, CartItemContainer, CartItemImg, CartItemPrice, CartItemTitle } from "./styles";
import expresso from "../../../../assets/coffee_types/expresso.png";

export function CartItem(){
    return(
        <CartItemContainer>
            <CartItemImg>
                <img src={expresso} />
            </CartItemImg>
            <CartItemTitle>
                Expresso Tradicional
            </CartItemTitle>
            <CartItemButtons>
                <InputNumber />
                <SecondaryButton>
                    <TrashIcon size={16} />
                    Remover
                </SecondaryButton>
            </CartItemButtons>
            <CartItemPrice>
                9,90
            </CartItemPrice>
        </CartItemContainer>
    );
}