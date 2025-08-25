import { createContext, useEffect, useReducer, type ReactNode } from "react";
import { cartReducer, type Cart } from "../reducers/cart/reducer";
import { addCartItemAction, updateItemUnitAction, increaseItemAction, decreaseItemAction, removeItemAction } from "../reducers/cart/actions";
import {coffee_catalog} from "../../data.json";

export interface CartItemType{
    id: number;
    quantity?: number;
    // price?
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
    addItem: (data: CartItemType) => void;
    increaseItem: (itemId: number) => void;
    decreaseItem: (itemId: number) => void;
    removeItem: (itemId: number) => void;
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
        cartReducer,
        {
            order: {
                items: []
            },
            itemsDetails: []
        },
        (initialArgs) => {
            const storedStateAsJSON = localStorage.getItem("@ignite-coffee-delivery:cart-state-1.0.0")
            if(storedStateAsJSON){
                return JSON.parse(storedStateAsJSON);
            }
            return initialArgs;
        }
    );

    useEffect(() => {
        const stateJSON = JSON.stringify(cartState);
        localStorage.setItem("@ignite-coffee-delivery:cart-state-1.0.0", stateJSON)
    }, [cartState])

    const {order, effective} = cartState;

    function addItem(itemUnit: CartItemType){
        //does the item already exists in the bascket?
        console.log(itemUnit)
        if(order && order.items){
            const itemExists = order.items.find(item => {
                return item.id === itemUnit.id
            });
            //yes?
            if(itemExists){//melhorar
                //update to the new quantity
                dispatch(updateItemUnitAction(itemUnit));
            }
            else{
                //no? Add to the bascket
                dispatch(addCartItemAction(itemUnit));
            }
        }
    }

    function increaseItem(itemId: number){
        dispatch(increaseItemAction(itemId))
    }

    function decreaseItem(itemId: number){
        dispatch(decreaseItemAction(itemId))
    }

    function removeItem(itemId: number){
        dispatch(removeItemAction(itemId))
    }
    return(
        <CartContext.Provider value={
            {   
                order,
                effective,
                addItem,
                increaseItem,
                decreaseItem,
                removeItem
            }} >
                {children}
        </CartContext.Provider>
    );
}