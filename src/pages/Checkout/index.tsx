import { CurrencyDollarIcon, MapPinAreaIcon } from "@phosphor-icons/react";
import {  TextM_Regular, TextS_Regular, TitleXS } from "../Home/components/Typography/styles";
import { AdressContainer, AdressLabel, CheckoutContainer, PaymentContainer, PaymentLabel, PurchaseInfo, SelectedItemstContainer, ShippmentContainer } from "./styles";
import { AdressForm } from "./components/AdressForm";
import { PaymentMode } from "./components/PaymentMode";
import { PrimaryButton } from "../../components/Button/style";
import { CartItem } from "./components/CartItem";
import { TotalCart } from "./components/TotalCart";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";

const adressFormSchema = z.object({
    zipCode: z.string().min(8, "Mínimo 8 caracteres").max(8, "Máximo 8 caracteres"),
    street: z.string(),
    number: z.string(),
    comple: z.string(),
    neighborhood: z.string(),
    city: z.string(),
    state: z.string()
});

type AdressFormData = z.infer<typeof adressFormSchema>

export function Checkout(){
    const newAdressForm = useForm<AdressFormData>({
        resolver: zodResolver(adressFormSchema),
        defaultValues:{}
    });

    function teste(data: AdressFormData){
        console.log(data)
    }

    const {handleSubmit, watch, reset} = newAdressForm;
    
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
                    <form onSubmit={handleSubmit(teste)}>
                        <FormProvider {...newAdressForm}>
                            <AdressForm />
                        </FormProvider>
                        <button type="submit">enviar</button>
                    </form>
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
            <PurchaseInfo>
                <TitleXS>Cafés selecionados</TitleXS>
                <SelectedItemstContainer>
                    <CartItem />
                    <TotalCart />
                    <PrimaryButton>
                        Confirmar pedido
                    </PrimaryButton>
                </SelectedItemstContainer>
            </PurchaseInfo>
        </CheckoutContainer>
    );
}