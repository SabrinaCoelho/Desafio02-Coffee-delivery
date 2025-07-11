import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { Catalog } from "../../pages/Home/components/Catalog";
import { Hero } from "../../pages/Home/components/Hero";

export function DefaultLayout(){
    return(
        <LayoutContainer>
            <Header/>
            <Hero />
            <Catalog />
        </LayoutContainer>
    );
}