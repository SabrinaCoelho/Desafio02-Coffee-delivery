import { Hero } from "./components/Hero";
import { Catalog } from "./components/Catalog";
import { HomeContainer } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <Hero />
            <Catalog />
        </HomeContainer>
    );
}