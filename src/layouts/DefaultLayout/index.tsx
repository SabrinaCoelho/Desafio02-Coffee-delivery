import { TrashIcon } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Home } from "../../pages/Home";
import { LayoutContainer } from "./styles";
export function DefaultLayout(){
    return(
        <LayoutContainer>
            <Header/>
            <Button variant="primary">
                Confirmar pedido
            </Button>
            <Button variant="secondary">
                <TrashIcon size={16} />
                Confirmar pedido
            </Button>
            {/* <Home/> */}
        </LayoutContainer>
    );
}