import { createContext, useEffect, useReducer, type ReactNode } from "react";
import { CartItem } from "../pages/Checkout/components/CartItem";
import { CartReducer, type Cart } from "../reducers/cart/reducer";
import { addCartItemAction, updateItemUnitAction, setAsPickedAction, getSelectedItemsAction } from "../reducers/cart/actions";
import {coffee_catalog} from "../../data.json";

export interface CartItemType{
    id: number;
    quantity: number;
    picked: boolean;
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
    setAsPicked: (id: number) => void;
    getSelectedItems: () => void;
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
    const [CartState, dispatch] = useReducer(
        CartReducer,
        {
            order: {
                items: []
            }
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
        const stateJSON = JSON.stringify(CartState);
        localStorage.setItem("@ignite-coffee-delivery:cart-state-1.0.0", stateJSON)
    }, [CartState])

    const {order, effective} = CartState;

    function addItem(itemUnit: CartItemType){
        //does the item already exists in the bascket?
        console.log(itemUnit)
        const itemExists = order.items.find(item => {
            return item.id === itemUnit.id
        });
        //yes?
        if(itemExists){//melhorar
            //update to the new quantity
            dispatch(updateItemUnitAction(itemUnit));
        }else{
            //no? Add to the bascket
            dispatch(addCartItemAction(itemUnit));
        }
    }

    function setAsPicked(id: number){
        dispatch(setAsPickedAction(id));
    }
    function getSelectedItems(){
        console.log("aqui")
        console.log(order)

        dispatch(getSelectedItemsAction(order.items))
    }

    return(
        <CartContext.Provider value={
            {   
                order,
                effective,
                addItem,
                setAsPicked,
                getSelectedItems
            }} >
                {children}
        </CartContext.Provider>
    );
}