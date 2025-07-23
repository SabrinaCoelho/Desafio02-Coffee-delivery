import { TrashIcon } from "@phosphor-icons/react";
import { SecondaryButton } from "../../../../components/Button/style";
import { InputNumber } from "../../../../components/InputNumber";
import { CartItemButtons, CartItemContainer, CartItemImg, CartItemInfo, CartItemPrice, CartItemTitle } from "./styles";
import expresso from "../../../../assets/coffee_types/expresso.png";

export function CartItem(){
    return(
        <CartItemContainer>
            <CartItemInfo>
                <CartItemImg>
                    <img src={expresso} width={64}/>
                </CartItemImg>
                <div>
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
                </div>
            </CartItemInfo>
            <CartItemPrice>
                R$9,90
            </CartItemPrice>
        </CartItemContainer>
    );
}