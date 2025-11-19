import { ShoppingCartIcon } from "@phosphor-icons/react";
import { IconButton } from "../../../../../components/Button/style";
import { InputNumber } from "../../../../../components/InputNumber";
import { TextL_Bold, TextS_Regular, TextTag } from "../../Typography/styles";
import { CatatalogItemContainer, ItemInfosContainer, ItemPrice, ItemPriceContainer, SelectItemContainer, Tag, TagsContainer } from "./styles";
import { useContext, useState } from "react";
import { CartContext, type CartItemType } from "../../../../../contexts/CartContext";
import { utils } from "../../../../../utils";

export interface Coffee extends CartItemType{
    tags: string[] | undefined;
    name: string;
    description: string;
    price: string;
    img: string;
    picked?: boolean | null;
}

type CatalogItemProps = {
    item: Coffee
}

export function CatalogItem({item}: CatalogItemProps){
    const [itemQty, setItemQty] = useState(item.quantity ?? 0);
    
    const {addItem} = useContext(CartContext);
    
    function handleOnClick(event: any){
        addItem({
            id: item.id,
            quantity: itemQty
        });
    }

    function handleOnChange(newQty: number){
        //nee to check if the item already exists on cart
        //const value = parseInt(event.target.value);
        setItemQty(newQty);
    }

    return(
        <CatatalogItemContainer>
            <SelectItemContainer>
                <ItemPriceContainer>
                    R$
                    <ItemPrice> {item.price.replace(".", ",")}</ItemPrice>
                </ItemPriceContainer>
                <div style={{display: "flex", gap: ".5rem"}}>
                    <InputNumber itemId={item.id} itemQty={itemQty} handleOnChangeQty={handleOnChange}/>
                    <IconButton onClick={(event) => handleOnClick(event)}>
                        <ShoppingCartIcon size={22} weight="fill" />
                    </IconButton>
                </div>
            </SelectItemContainer>

            <ItemInfosContainer>
                <TextL_Bold>
                    {item.name}
                </TextL_Bold>
                <TextS_Regular>
                    {item.description}
                </TextS_Regular>
            </ItemInfosContainer>
            
            <TagsContainer>
                {
                    item && item.tags ? item.tags.map((tag: string, id: number) => (
                        <Tag key={id}>
                            <TextTag>{tag}</TextTag>
                        </Tag>
                    )) : null
                }
            </TagsContainer>

            <span>
                <img src={item.img} alt="" style={{width: "120px"}}/>
            </span>

        </CatatalogItemContainer>
    );
}