import { MapPinAreaIcon } from "@phosphor-icons/react";
import {  TextM_Regular, TextS_Regular, TitleXS } from "../Home/components/Typography/styles";
import { AdressContainer, AdressLabel, CheckoutContainer, SelectedItemstContainer, ShippmentContainer } from "./styles";
import { AdressForm } from "./components/AdressForm";

export function Checkout(){
    return (
        <CheckoutContainer>
            <ShippmentContainer>
                <TitleXS>Complete seu pedido</TitleXS>
                <AdressContainer >
                    <AdressLabel>
                        <MapPinAreaIcon size={22} />
                        <div>
                            <TextM_Regular>Endereço de Entrega</TextM_Regular>
                            <TextS_Regular>Informe o endereço onde deseja receber seu pedido</TextS_Regular>
                        </div>
                    </AdressLabel>
                    <AdressForm />
                </AdressContainer>
            </ShippmentContainer>



            <SelectedItemstContainer>
                <TitleXS>Cafés selecionados</TitleXS>
            </SelectedItemstContainer>
        </CheckoutContainer>
    );
}