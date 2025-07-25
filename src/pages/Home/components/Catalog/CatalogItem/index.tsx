import { ShoppingCartIcon } from "@phosphor-icons/react";
import { IconButton } from "../../../../../components/Button/style";
import { InputNumber } from "../../../../../components/InputNumber";
import { TextL_Bold, TextS_Regular, TextTag } from "../../Typography/styles";
import { CatatalogItemContainer, ItemInfosContainer, ItemPrice, ItemPriceContainer, SelectItemContainer, Tag, TagsContainer } from "./styles";

export interface Coffee{
    id: string;
    tags: string[];
    name: string;
    description: string;
    price: string;
    img: string;
}

type CatalogItemProps = {
    item: Coffee
}

export function CatalogItem({item}: CatalogItemProps){
    console.log(item);
    return(
        <CatatalogItemContainer>

            <SelectItemContainer>
                <ItemPriceContainer>
                    R$
                    <ItemPrice>{item.price}</ItemPrice>
                </ItemPriceContainer>
                <div style={{display: "flex", gap: ".5rem"}}>
                    <InputNumber />
                    <IconButton>
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
                    item.tags.map((tag: string) => (
                        <Tag>
                            <TextTag>{tag}</TextTag>
                        </Tag>
                    ))
                }
            </TagsContainer>

            <span>
                <img src={item.img} alt="" style={{width: "120px"}}/>
            </span>

        </CatatalogItemContainer>
    );
}