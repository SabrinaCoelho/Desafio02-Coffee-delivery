import { produce } from "immer";
import type { CartItem, CartItemType, Delivery, Payment } from "../../contexts/CartContext";
import { ActionTypes } from "./actions";
import type { Coffee } from "../../pages/Home/components/Catalog/CatalogItem";
import {coffee_catalog} from "../../../data.json";

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
    /* console.log(state);
    console.log(action); */

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
                const itemToUpdateQuantity = draft.order.items.find(
                    item => item.id === action.payload.item.id
                );
                console.log("update ->"+action.payload.item);
                if(itemToUpdateQuantity && itemToUpdateQuantity.quantity){//check
                    itemToUpdateQuantity.quantity = action.payload.item.quantity;
                }
            });
        case ActionTypes.PICKED_ITEM:
            return produce(state, draft => {
                const pickedItem = draft.order.items.find(
                    item => item.id === action.payload.id
                );
                if(pickedItem){//check
                    pickedItem.picked = !pickedItem.picked;
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
        case ActionTypes.GET_SELECTED_ITEMS:
           const objs = state.order.items.find((item: CartItemType) => {
                coffee_catalog.forEach((e: Coffee) => e.id === item.id)
           })
           console.log(objs)
           return {}
           /* objs.forEach(e => {
                {
                    ...e,
                    quantity
                }
            }) */
        default:
            return state;
    }
}