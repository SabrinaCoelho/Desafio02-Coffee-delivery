import { Header } from "../../components/Header";
import { CatalogItem } from "../../pages/Home/components/Catalog/CatalogItem";
import { LayoutContainer } from "./styles";
export function DefaultLayout(){
    return(
        <LayoutContainer>
            <Header/>
            <CatalogItem 
                description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
                name="Latte"
                tags={["Tradicional", "com leite"]}
                price={10.50}
                img=""
            />
        </LayoutContainer>
    );
}