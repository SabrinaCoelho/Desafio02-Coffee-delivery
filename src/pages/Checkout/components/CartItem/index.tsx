import { TrashIcon } from "@phosphor-icons/react";
import { SecondaryButton } from "../../../../components/Button/style";
import { InputNumber } from "../../../../components/InputNumber";
import { CartItemButtons, CartItemContainer, CartItemImg, CartItemInfo, PriceCartItem, CartItemTitle } from "./styles";
import { Separator } from "../TotalCart/styles";
import type { Coffee } from "../../../Home/components/Catalog/CatalogItem";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { utils } from "../../../../utils";
import { defaultTheme } from "../../../../styles/default";

interface CartItemProps{
    item: Coffee;
}

export function CartItem({item}: CartItemProps){
    const { removeItem } = useContext(CartContext);
    const [ , setItemQty ] = useState(0);
    function handleOnChangeQty(newQty: number){
        setItemQty(newQty);
    }

    function handleOnClick(){
        removeItem(item.id);
    }
    return(
        <>
            <CartItemContainer>
                <CartItemInfo>
                    <CartItemImg>
                        <img src={"/Desafio02-Coffee-delivery/" + item.img} alt="" style={{width: "64px"}}/>
                    </CartItemImg>
                    <div>
                        <CartItemTitle>
                            {item.name}
                        </CartItemTitle>
                        <CartItemButtons>
                            <InputNumber handleOnChangeQty={handleOnChangeQty} itemQty={item.quantity ?? 0} itemId={item.id}/>
                            <SecondaryButton onClick={() => handleOnClick()}>
                                <TrashIcon size={16} color={defaultTheme.purple}/>
                                Remover
                            </SecondaryButton>
                        </CartItemButtons>
                    </div>
                </CartItemInfo>
                <PriceCartItem>
                    {utils.formatCurrency(item.itemAmount)}
                </PriceCartItem>
            </CartItemContainer>
            <Separator />
        </>
    );
}