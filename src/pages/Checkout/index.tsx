import { CurrencyDollarIcon, MapPinAreaIcon } from "@phosphor-icons/react";
import {  TextM_Regular, TextS_Regular, TitleXS } from "../Home/components/Typography/styles";
import { AdressContainer, AdressLabel, CheckoutContainer, PaymentContainer, PaymentLabel, PurchaseInfo, SelectedItemstContainer, ShippmentContainer } from "./styles";
import { AdressForm } from "./components/AdressForm";
import { PaymentOptions } from "./components/PaymentOptions";
import { PrimaryButton } from "../../components/Button/style";
import { CartItem } from "./components/CartItem";
import { TotalCart } from "./components/TotalCart";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { useContext } from "react";
import { CartContext, type CartItemType } from "../../contexts/CartContext";
import type { Coffee } from "../Home/components/Catalog/CatalogItem";
import { coffee_catalog } from "../../../data.json";

const adressFormSchema = z.object({
    zip: z.string().min(8, {error: "Mínimo 8 caracteres"}),//TODO VALIATION
    street: z.string().min(5, {error: "Mínimo 5 caracteres"}).max(40, {error: "Máximo 40 caracteres"}),
    number: z.string().min(2, {error: "Mínimo 2 caracteres"}),
    comple: z.string(),
    neighborhood: z.string().min(3, {error: "Mínimo 3 caracteres"}),
    city: z.string().min(4, {error: "Mínimo 4 caracteres"}),
    state: z.string().min(2, {error: "Mínimo 2 caracteres"}),
    pay_mode: z.enum(['credit', 'debit', 'cash'], {error: "Selecione um meio de pagamento"}),
    fee: z.string().default("3,50")
});

type AdressFormData = z.infer<typeof adressFormSchema>

export function Checkout(){
    const {order, updateTotal, updateItemAmount} = useContext(CartContext);
    const newAdressForm = useForm<AdressFormData>({
        mode: "onChange",
        resolver: zodResolver(adressFormSchema),
        defaultValues:{}
    });

    function calculateItemAmount(itemPrice: string, itemQty: number): number{
        // return ((parseFloat(itemPrice) * itemQty).toFixed(2)).replace(".", ",")
        return parseFloat(itemPrice) * itemQty
    }
    const selectedItems = order?.items.map((item: CartItemType) => {
        const found = coffee_catalog.find((cc: Coffee) => cc.id === item.id)
        console.log(found)
        if(found && item.quantity){
            const itemPrice = calculateItemAmount(found.price, item.quantity);
            updateItemAmount(item.id, itemPrice)
            updateTotal()

            return {
                ...found,
                quantity: item.quantity,
                price: (itemPrice).toFixed(2).replace(".", ",")
            }
        }
    })

    const {handleSubmit, formState: {errors}} = newAdressForm;
    
    function teste(data: AdressFormData){
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(teste)}>
            <CheckoutContainer>
                
                    <FormProvider {...newAdressForm}>
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
                                <PaymentOptions />
                                {errors.pay_mode && <pre>{errors.pay_mode?.message}</pre>}
                            </PaymentContainer>
                        </ShippmentContainer>
                        <PurchaseInfo>
                            <TitleXS>Cafés selecionados</TitleXS>
                            <SelectedItemstContainer>
                                {
                                    selectedItems?.map(item => <CartItem key={item.id} item={item}/>)
                                }
                                
                                <TotalCart />
                                <PrimaryButton type="submit">
                                    Confirmar pedido
                                </PrimaryButton>
                                {/* <button type="button" onClick={() => console.log(order)}>testee</button> */}
                            </SelectedItemstContainer>
                        </PurchaseInfo>
                    </FormProvider>
            </CheckoutContainer>
        </form>
    );
}