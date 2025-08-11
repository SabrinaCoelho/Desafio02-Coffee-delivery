import { createContext, useReducer, type ReactNode } from "react";
import { CartItem } from "../pages/Checkout/components/CartItem";
import { CartReducer, type Cart } from "../reducers/cart/reducer";
import { addCartItemAction, updateItemUnitAction, setAsPickedAction } from "../reducers/cart/actions";
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
        const itemsInCart = order.items.map(
            (item: CartItemType) => coffee_catalog.find(c => c.id === item.id)
        )
        console.log(itemsInCart)
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