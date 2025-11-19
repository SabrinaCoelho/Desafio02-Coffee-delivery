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
import { useContext, useEffect, useMemo } from "react";
import { CartContext, type CartItemType } from "../../contexts/CartContext";
import type { Coffee } from "../Home/components/Catalog/CatalogItem";
import { coffee_catalog } from "../../../data.json";
import { useNavigate } from "react-router";

const adressFormSchema = z.object({
    zip: z.string()
        .min(9, { message: "Mínimo 8 caracteres" })
        .max(9, { message: "Máximo 8 caracteres" }),
    street: z.string().min(5, { message: "Mínimo 5 caracteres" }).max(40, { message: "Máximo 40 caracteres" }),
    number: z.string()
        .min(1, { message: "Mínimo 1 caractere" })
        .regex(/^[0-9]+$/, { message: "Somente números" }),
    comple: z.string().optional(),
    neighborhood: z.string().min(3, { message: "Mínimo 3 caracteres" }),
    city: z.string().min(4, { message: "Mínimo 4 caracteres" }),
    state: z.string().min(2, { message: "Mínimo 2 caracteres" }).max(2, { message: "Máximo 2 caracteres" }).toUpperCase(),
    pay_mode: z.enum(['credit', 'debit', 'cash'], { error: "Selecione um meio de pagamento" }),
});

type AdressFormData = z.infer<typeof adressFormSchema>

export function Checkout(){
    const {order, updateTotal, updateItemAmount, addDeliveryData} = useContext(CartContext);
    const navigate = useNavigate();
    const newAdressForm = useForm<AdressFormData>({
        mode: "onChange",
        resolver: zodResolver(adressFormSchema),
        defaultValues:{}
    });

    function calculateItemAmount(itemPrice: string, itemQty: number): number {
        // Garante que o itemPrice seja tratado como número antes de calcular
        const price = parseFloat(itemPrice.replace(',', '.')) || 0;
        return price * itemQty;
    }


    function calculateOrderAmount(itemsTotal: number, deliveryFee: number = 3.5): number {
        return itemsTotal + deliveryFee;
    }

   // A lista de itens selecionados e os cálculos
    const items = order?.items;
    // const currentTotal = parseFloat(order?.total ?? 0); // O total ATUAL no contexto
    const currentTotal = order?.totalOrderAmount; // O total ATUAL no contexto
    const deliveryFee = order?.delivery?.fee ?? 3.50; 

    useEffect(() => {
        // Só executa se houver itens
        if (items && items.length > 0) {
            let productsTotal = 0;
            const itemsPriceList: CartItemType[] = [];

            items.forEach((cartItem: CartItemType) => {
                const foundCoffee = coffee_catalog.find((cc: Coffee) => cc.id === cartItem.id);
                
                if (foundCoffee && cartItem.quantity) {
                    const totalItemPrice =  calculateItemAmount(foundCoffee.price, cartItem.quantity);
                    productsTotal += totalItemPrice;
                    itemsPriceList.push({ id: cartItem.id, itemAmount: totalItemPrice});
                }
            });

            const totalOrderAmount = calculateOrderAmount(productsTotal);

            // Só atualiza o contexto se o total calculado for DIFERENTE
            // do total que já está salvo no contexto.
            if (totalOrderAmount !== currentTotal) {
                // console.log("Atualizando totais no contexto...");
                updateItemAmount(itemsPriceList);
                updateTotal({totalOrderAmount, productsTotal, deliveryFee});
            }
        }
        
    }, [items, deliveryFee, currentTotal, updateItemAmount, updateTotal]); 

    const selectedItemsForDisplay = useMemo(() => {
        if (!items) return [];

        return items.map((cartItem: CartItemType) => {
            const foundCoffee = coffee_catalog.find((cc: Coffee) => cc.id === cartItem.id);
            if (!foundCoffee) return null;
            return {
                ...foundCoffee,
                quantity: cartItem.quantity,
                itemAmount: cartItem.itemAmount,
            };
        }).filter(item => item !== null);

    }, [items]);

    const {handleSubmit, formState: {errors}, reset} = newAdressForm;
    
    function subForm(data: AdressFormData){
        console.log(data);
        addDeliveryData(data);
        reset();
        navigate("/success");
    }

    return (
        <form onSubmit={handleSubmit(subForm)}>
            <FormProvider {...newAdressForm}>
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
                            <PaymentOptions />
                            {errors.pay_mode && <pre>{errors.pay_mode?.message}</pre>}
                        </PaymentContainer>
                    </ShippmentContainer>
                    <PurchaseInfo>
                        <TitleXS>Cafés selecionados</TitleXS>
                        {
                            selectedItemsForDisplay.length ? 
                            <SelectedItemstContainer>
                                {
                                    selectedItemsForDisplay?.map((item: Coffee) => <CartItem key={item.id} item={item}/>)
                                }
                                <TotalCart />
                                <PrimaryButton type="submit">
                                    Confirmar pedido
                                </PrimaryButton>
                                <button type="button" onClick={() => console.log(order)}>testee</button>
                            </SelectedItemstContainer>:
                            <SelectedItemstContainer>
                                <TextM_Regular>
                                    Carrinho vazio!
                                </TextM_Regular>
                            </SelectedItemstContainer>
                        }
                    </PurchaseInfo>
                </CheckoutContainer>
            </FormProvider>
        </form>
    );
}