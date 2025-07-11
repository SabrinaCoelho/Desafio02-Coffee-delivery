import { TitleL } from "../Typography/styles";
import { CatalogItem } from "./CatalogItem";
import { CatalogContainer, CatalogOptionsContainer } from "./styles";
import img_test from "../../../../assets/coffee_types/expresso.png";

export function Catalog(){
    return(
        <CatalogContainer>
            <TitleL>
                Nossos cafés
            </TitleL>
            <CatalogOptionsContainer>
                <CatalogItem 
                description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
                name="Latte"
                tags={["Tradicional", "com leite"]}
                price="9,90"
                img={img_test}
            />
            </CatalogOptionsContainer>
        </CatalogContainer>
    );
}