import { ShoppingCartIcon } from "@phosphor-icons/react";
import { IconButton } from "../../../../../components/Button/style";
import { InputNumber } from "../../../../../components/InputNumber";
import { TextL_Bold, TextS_Regular, TextTag } from "../../Typography/styles";
import { CatatalogItemContainer, ItemInfosContainer, ItemPrice, ItemPriceContainer, SelectItemContainer, Tag, TagsContainer } from "./styles";

interface CatalogItemProps{
    tags: string[];
    name: string;
    description: string;
    price: string;
    img: string;
}

export function CatalogItem(props: CatalogItemProps){
    console.log(props);
    return(
        <CatatalogItemContainer>

            <SelectItemContainer>
                <ItemPriceContainer>
                    R$
                    <ItemPrice>{props.price}</ItemPrice>
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
                    {props.name}
                </TextL_Bold>
                <TextS_Regular>
                    {props.description}
                </TextS_Regular>
            </ItemInfosContainer>
            
            <TagsContainer>
                {
                    props.tags.map((tag: any) => (
                        <Tag>
                            <TextTag>{tag}</TextTag>
                        </Tag>
                    ))
                }
            </TagsContainer>

            <span>
                <img src={props.img} alt="" style={{width: "120px"}}/>
            </span>

        </CatatalogItemContainer>
    );
}