import { produce } from "immer";
import type { CartItem, Delivery, Payment } from "../../contexts/CartContext";
import { ActionTypes } from "./actions";

export interface Cart{
    items: CartItem[];
    payment?: Payment;
    delivery?: Delivery;
    total?: number;
}

interface CartState{
    order: Cart;
    effective: boolean | null;
}

export function CartReducer(state: CartState, action: any){
    console.log(state);
    console.log(action);

    switch(action.type){
        case ActionTypes.ADD_ITEM:
            console.log("ON ADD ITEM")
            return produce(state, draft => {
                draft.order.items.push(action.payload.newItem);
            });
        case ActionTypes.INCREASE_ITEM:
            return produce(state, draft => {
                const itemToIncrease = draft.order.items.find(
                    item => item.id === action.payload.id
                );
                if(itemToIncrease && itemToIncrease.id){//check
                    itemToIncrease.id += 1;
                }
            });
        case ActionTypes.DECREASE_ITEM:
            return produce(state, draft => {
                const itemToIncrease = draft.order.items.find(
                    item => item.id === action.payload.id
                );
                if(itemToIncrease && itemToIncrease.id){//check
                    itemToIncrease.id -= 1;
                }
            });
        case ActionTypes.CHANGE_ITEM_UNIT:
            return produce(state, draft => {
                const itemToUpdateQuantity = draft.order.items.findIndex(
                    item => item.id === action.payload.id
                );
                console.log(itemToUpdateQuantity);
                /* if(itemToUpdateQuantity && itemToUpdateQuantity?.id){//check
                    itemToUpdateQuantity.quantity = ;
                } */
            });
        case ActionTypes.ADD_DELIVERY_DATA:
            return produce(state, draft => {
                draft.order.delivery = action.payload.deliveryData
            });
        case ActionTypes.ADD_PAYMENT_MODE:
            return produce(state, draft => {
                draft.order.payment = action.payload.paymentMode
            })
        default:
            return state;
    }
}