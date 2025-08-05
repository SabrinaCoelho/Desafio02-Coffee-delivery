import { TitleL } from "../Typography/styles";
import { CatalogContainer, CatalogOptionsContainer } from "./styles";
import {coffee_catalog} from "../../../../../data.json";
import {CatalogItem, type Coffee} from "../Catalog/CatalogItem/index";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

export function Catalog(){
    const { order } = useContext(CartContext);
    return(
        <CatalogContainer>
            <TitleL>
                Nossos cafés
            </TitleL>
            <button onClick={() => console.log(order)}>teste</button>
            <CatalogOptionsContainer>
                {
                    coffee_catalog.map((coffee: Coffee) => (<CatalogItem key={coffee.id} item={coffee}/>))
                }
            </CatalogOptionsContainer>
        </CatalogContainer>
    );
}