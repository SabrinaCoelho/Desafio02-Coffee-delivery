import { TitleL } from "../Typography/styles";
import { CatalogItem } from "./CatalogItem";
import { CatalogContainer, CatalogOptionsContainer } from "./styles";

export function Catalog(){
    return(
        <CatalogContainer>
            <TitleL>
                Nossos cafés
            </TitleL>
            <CatalogOptionsContainer>
                <CatalogItem />
            </CatalogOptionsContainer>
        </CatalogContainer>
    );
}