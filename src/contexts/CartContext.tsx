import { createContext, useReducer, type ReactNode } from "react";
import { CartItem } from "../pages/Checkout/components/CartItem";
import { CartReducer, type Cart } from "../reducers/cart/reducer";
import { addCartItemAction, updateItemUnitAction } from "../reducers/cart/actions";
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
    mode: string//to do
}

interface CartContextType{
    order: Cart | null;
    effective: boolean;
    addItem: (data: CartItem) => void;
    changeItemUnit: (data: CartItem) => void;
    /* setAsEffective: () => void;
    createNewOrder: (data: CartItem) => void;
    setPaymentMode: (data: Payment) => void;
    setDeliveryData: (data: Delivery) => void; */
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps{
    children: ReactNode;
}

export function CartContextProvider({children}: CartContextProviderProps){
    const [cartState, dispatch] = useReducer(
        CartReducer,
        {
            order: {
                items: []
            },
            effective: null
        }
    );

    const {order, effective} = cartState;

    function addItem(newItem: CartItem){
        const item: CartItem = {
            id: newItem.id,
            quantity: newItem.quantity
        }

        dispatch(addCartItemAction(item));
    }

    function changeItemUnit(itemUnit: CartItem){
        //does the item already exists in the bascket?
        console.log(itemUnit)
        const itemToUpdate = order.items.find(item => {
            return item.id === itemUnit.id
        });
        //yes?
        if(itemToUpdate){//melhorar
            //update to the new quantity
            dispatch(updateItemUnitAction(itemToUpdate));
        }
        //no? Add to the bascket
        addItem(itemUnit);
    }

    return(
        <CartContext.Provider value={
            {   
                order,
                effective,
                changeItemUnit,
                addItem
            }} >
                {children}
        </CartContext.Provider>
    );
}