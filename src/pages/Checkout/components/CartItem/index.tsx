import { TrashIcon } from "@phosphor-icons/react";
import { SecondaryButton } from "../../../../components/Button/style";
import { InputNumber } from "../../../../components/InputNumber";
import { CartItemButtons, CartItemContainer, CartItemImg, CartItemInfo, PriceCartItem, CartItemTitle } from "./styles";
import expresso from "../../../../assets/coffee_types/expresso.png";
import { Separator } from "../TotalCart/styles";

export function CartItem(item: any){
    return(
        <>
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
                            <InputNumber coffeId={1}/>
                            <SecondaryButton>
                                <TrashIcon size={16} />
                                Remover
                            </SecondaryButton>
                        </CartItemButtons>
                    </div>
                </CartItemInfo>
                <PriceCartItem>
                    R$9,90
                </PriceCartItem>
            </CartItemContainer>
            <Separator />
        </>
    );
}