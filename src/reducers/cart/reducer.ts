import { produce } from "immer";
import type { CartItemType, Delivery, Payment } from "../../contexts/CartContext";
import { ActionTypes } from "./actions";
import type { Coffee } from "../../pages/Home/components/Catalog/CatalogItem";
import {coffee_catalog} from "../../../data.json";

export interface Cart{
    items: CartItemType[]; //nao existia
    payment?: Payment;
    delivery?: Delivery;
    total?: number;
}

export interface CartState{
    order: Cart;
    itemsDetails: Coffee[];//antes era items
    effective: boolean;
}

export function cartReducer(state: CartState, action: any){
    /* console.log(state);
    console.log(action); */

    switch(action.type){
        case ActionTypes.ADD_ITEM:
            console.log("ON ADD ITEM")
            return produce(state, draft => {
                console.log(state)
                console.log(draft)
                draft.order.items.push(action.payload.newItem);
            });
        case ActionTypes.INCREASE_ITEM:
            return produce(state, draft => {
                const itemToIncrease = draft.order.items.find(
                    item => item.id === action.payload.id
                );
                if(itemToIncrease && itemToIncrease.quantity){//check
                    itemToIncrease.quantity += 1;
                }
            });
        case ActionTypes.DECREASE_ITEM:
            return produce(state, draft => {
                const itemToDecrease = draft.order.items.find(
                    item => item.id === action.payload.id
                );
                if(itemToDecrease && itemToDecrease.quantity){//check
                    itemToDecrease.quantity -= 1;
                }
            });
        case ActionTypes.REMOVE_ITEM:
            return produce(state, draft => {
                draft.order.items = draft.order.items.filter(
                    item => {
                        console.log(item.id !== action.payload.id)
                        return item.id !== action.payload.id
                    }
                );
            });
        case ActionTypes.CHANGE_ITEM_UNIT:
            return produce(state, draft => {
                const itemToUpdateQuantity = draft.selectedItems.find(
                    item => item.id === action.payload.item.id
                );
                console.log("update ->"+action.payload.item);
                if(itemToUpdateQuantity && itemToUpdateQuantity.quantity){//check
                    itemToUpdateQuantity.quantity = action.payload.item.quantity;
                }
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