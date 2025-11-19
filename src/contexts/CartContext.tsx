import { createContext, useEffect, useReducer, type ReactNode } from "react";
import { cartReducer, type Cart, type CartState } from "../reducers/cart/reducer";
import { addCartItemAction, increaseItemAction, decreaseItemAction, removeItemAction, updateTotalAction, updateItemAmountAction, addDeliveryDataAction, resetStateAction } from "../reducers/cart/actions";

export interface CartItemType{
    id: number;
    quantity?: number;
    itemAmount?: number;
}
/* interface CreateCartData{
    order: CartItem[];
} */

export interface Delivery{
    zip: string;
    street: string;
    number: string;
    comple?: string;
    neighborhood: string;
    city: string;
    state: string;
    pay_mode: 'credit'| 'debit'| 'cash';
    fee?: number;
}

export interface Payment{//add enum?
    mode: string//to do
}

interface CartContextType{
    order: Cart | null;
    addItem: (data: CartItemType) => void;
    increaseItem: (itemId: number) => void;
    decreaseItem: (itemId: number) => void;
    removeItem: (itemId: number) => void;
    updateItemAmount: (itemsPrice: CartItemType[]) => void;
    updateTotal: (totalS: any) => void;
    addDeliveryData: (data: Delivery) => void;
    resetState: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps{
    children: ReactNode;
}

export function CartContextProvider({children}: CartContextProviderProps){
    const initialContextState: CartState = {
        order: {
            items: []
        },
        itemsDetails: []
    };

    const [cartState, dispatch] = useReducer(
        cartReducer,
        initialContextState,
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

    const {order} = cartState;

    function resetState (){
        dispatch(resetStateAction(initialContextState))
    }

    function addItem(itemUnit: CartItemType){
        //does the item already exists in the bascket?
        
        const itemExists = order.items ? order.items.find(item => {
            return item.id === itemUnit.id
        }) : 0;
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

    function increaseItem(itemId: number){
        dispatch(increaseItemAction(itemId))
    }

    function decreaseItem(itemId: number){
        dispatch(decreaseItemAction(itemId))
    }

    function removeItem(itemId: number){
        dispatch(removeItemAction(itemId))
    }

    function updateItemAmount(itemsPrice: any[]){
        // dispatch(updateItemAmountAction(itemId, amount))
        console.log(itemsPrice)
        dispatch(updateItemAmountAction(itemsPrice))
    }
    function updateTotal(totalS: any){
        dispatch(updateTotalAction(totalS))
    }

    function addDeliveryData(data: Delivery){
        // const delivery = {...data};
        dispatch(addDeliveryDataAction(data));
        
    }
    return(
        <CartContext.Provider value={
            {   
                order,
                addItem,
                increaseItem,
                decreaseItem,
                removeItem,
                updateItemAmount,
                updateTotal,
                addDeliveryData,
                resetState
            }} >
                {children}
        </CartContext.Provider>
    );
}