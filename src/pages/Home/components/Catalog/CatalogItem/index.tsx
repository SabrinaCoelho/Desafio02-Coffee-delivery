import { TextL_Bold, TextS_Regular, TextTag } from "../../Typography/styles";
import { CatatalogItemContainer, Tag } from "./styles";

export function CatalogItem(){
    return(
        <CatatalogItemContainer>
            <Tag>
                <TextTag>Tradicional</TextTag>
            </Tag>
            <TextL_Bold>
                Expresso Tradicional
            </TextL_Bold>
            <TextS_Regular>
                O tradicional café feito com água quente e grãos moídos
            </TextS_Regular>
        </CatatalogItemContainer>
    );
}