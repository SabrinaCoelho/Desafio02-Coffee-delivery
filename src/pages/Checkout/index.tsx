import { CurrencyDollarIcon, MapPinAreaIcon } from "@phosphor-icons/react";
import {  TextM_Regular, TextS_Regular, TitleXS } from "../Home/components/Typography/styles";
import { AdressContainer, AdressLabel, CheckoutContainer, PaymentContainer, PaymentLabel, SelectedItemstContainer, ShippmentContainer } from "./styles";
import { AdressForm } from "./components/AdressForm";
import { PaymentMode } from "./components/PaymentMode";
import { PrimaryButton } from "../../components/Button/style";
import { CartItem } from "./components/CartItem";

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
                <PaymentContainer>
                    <PaymentLabel>
                        <CurrencyDollarIcon size={22} />
                        <div>
                            <TextM_Regular>Pagamento</TextM_Regular>
                            <TextS_Regular>O pagamento é feito na entrega. Escolha a forma que deseja pagar</TextS_Regular>
                        </div>
                    </PaymentLabel>
                    <PaymentMode />
                </PaymentContainer>
            </ShippmentContainer>
            <SelectedItemstContainer>
                <TitleXS>Cafés selecionados</TitleXS>
                <CartItem />
                <PrimaryButton>
                    Confirmar pedido
                </PrimaryButton>
            </SelectedItemstContainer>
        </CheckoutContainer>
    );
}