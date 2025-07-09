import { ShoppingCartIcon } from "@phosphor-icons/react";
import { IconButton } from "../../../../../components/Button/style";
import { InputNumber } from "../../../../../components/InputNumber";
import { TextL_Bold, TextS_Regular, TextTag } from "../../Typography/styles";
import { CatatalogItemContainer, ItemPrice, ItemPriceContainer, SelectItemContainer, Tag } from "./styles";

interface CatalogItemProps{
    tags: string[];
    name: string;
    description: string;
    price: number;
    img: string;
}

export function CatalogItem(props: CatalogItemProps){
    console.log(props);
    return(
        <CatatalogItemContainer>
            {
                props.tags.map((e: any) => (
                    <Tag>
                        <TextTag>{e}</TextTag>
                    </Tag>
                ))
            }
            <TextL_Bold>
                Expresso Tradicional
            </TextL_Bold>
            <TextS_Regular>
                O tradicional café feito com água quente e grãos moídos
            </TextS_Regular>

            <SelectItemContainer>
                <ItemPriceContainer>
                    R$
                    <ItemPrice>9,90</ItemPrice>
                </ItemPriceContainer>
                <div style={{display: "flex", gap: ".5rem"}}>
                    <InputNumber />
                    <IconButton>
                        <ShoppingCartIcon size={22} weight="fill" />
                    </IconButton>
                </div>
            </SelectItemContainer>
        </CatatalogItemContainer>
    );
}