import { TitleL } from "../Typography/styles";
import { CatalogContainer, CatalogOptionsContainer } from "./styles";
import {coffee_catalog} from "../../../../../data.json";
import {CatalogItem, type Coffee} from "../Catalog/CatalogItem/index";

export function Catalog(){
    console.log(coffee_catalog);
    return(
        <CatalogContainer>
            <TitleL>
                Nossos cafés
            </TitleL>
            <CatalogOptionsContainer>
                {
                    coffee_catalog.map((coffee: Coffee) => (<CatalogItem key={coffee.id} item={coffee}/>))
                }
            </CatalogOptionsContainer>
        </CatalogContainer>
    );
}