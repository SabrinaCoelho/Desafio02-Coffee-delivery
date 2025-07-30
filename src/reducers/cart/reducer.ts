import { produce } from "immer";
import type { CartItem, Delivery, Payment } from "../../contexts/CartContext";

export interface Cart{
    items: CartItem[];
    payment: Payment;
    delivery: Delivery;
    total: number;
}

interface CartState{
    order: Cart;
    effective: boolean;
}

export function CartReducer(state: CartState, action: any){
    console.log(state);
    console.log(action);

    switch(action.type){
        case action.ADD_ITEM:
            return produce(state, draft => {
                draft.order.items.push(action.payload.newItem);
            });
        case action.INCREASE_ITEM:
            return produce(state, draft => {
                const itemToIncrease = draft.order.items.find(
                    item => item.id === action.payload.id
                );
                if(itemToIncrease && itemToIncrease.id){//check
                    itemToIncrease.id += 1;
                }
            });
        case action.DECREASE_ITEM:
            return produce(state, draft => {
                const itemToIncrease = draft.order.items.find(
                    item => item.id === action.payload.id
                );
                if(itemToIncrease && itemToIncrease.id){//check
                    itemToIncrease.id -= 1;
                }
            });
        case action.ADD_DELIVERY_DATA:
            return produce(state, draft => {
                draft.order.delivery = action.payload.deliveryData
            });
        case action.ADD_PAYMENT_MODE:
            return produce(state, draft => {
                draft.order.payment = action.payload.paymentMode
            })
        default:
            return state;
    }
}