import { createContext, useReducer, type ReactNode } from "react";
import { CartItem } from "../pages/Checkout/components/CartItem";
import { CartReducer } from "../reducers/cart/reducer";
import { addCartItemAction } from "../reducers/cart/actions";
import data from "../../data.json";

export interface CartItem{
    id: number;
    quantity: number;
}
/* interface CreateCartData{
    order: CartItem[];
} */

export interface Delivery{
    zipCode: string;
    street: string;
    number: string;
    aditional?: string;
    neighborhood: string;
    city: string;
    state: string;
}

export interface Payment{//add enum?
    mode: string
}

interface CartContextType{
    order: CartItem[];
    effectiveCart: boolean;
    payment: Payment;
    delivery: Delivery;
    setAsEffective: () => void;
    createNewOrder: (data: CartItem) => void;
    setPaymentMode: (data: Payment) => void;
    setDeliveryData: (data: Delivery) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps{
    children: ReactNode;
}

export function CartContextProvider({children}: CartContextProviderProps){
    const [cartState, dispatch] = useReducer(
        CartReducer,
        {
            order: {},
            effective: null
        },
        (initialArgs) => {
            const dataParsed = JSON.stringify(data)
            return JSON.parse(dataParsed);
        }
    );

    const {order, effective} = cartState;

    function addItem(data: CartItem){
        const item: CartItem = {
            id: data.id,
            quantity: data.quantity
        }

        dispatch(addCartItemAction(item));
    }

    return(
        <CartContext.Provider value={
            {   
                order,
                effective,
                payment,
                delivery,
                setAsEffective,
                createNewOrder,
                setPaymentMode,
                setDeliveryData
            }} >
                {children}
        </CartContext.Provider>
    );
}