import { produce } from "immer";
import type { CartItemType, Delivery, Payment } from "../../contexts/CartContext";
import { ActionTypes } from "./actions";
import type { Coffee } from "../../pages/Home/components/Catalog/CatalogItem";

export interface Cart{
    items: CartItemType[]; //nao existia
    payment?: Payment;
    delivery?: Delivery;
    productsTotal?: number
    totalOrderAmount?: number;
    deliveryFee?: number;
}

export interface CartState{
    order: Cart;
    itemsDetails: Coffee[];//antes era items
    // effective: boolean;
}

export function cartReducer(state: CartState, action: any){
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
                if(itemToIncrease && itemToIncrease.quantity){
                    itemToIncrease.quantity += 1;
                }
            });
        case ActionTypes.DECREASE_ITEM:
            return produce(state, draft => {
                const itemToDecrease = draft.order.items.find(
                    item => item.id === action.payload.id
                );
                if(itemToDecrease && itemToDecrease.quantity){
                    itemToDecrease.quantity -= 1;
                }
            });
        case ActionTypes.REMOVE_ITEM:
            return produce(state, draft => {
                draft.order.items = draft.order.items.filter(
                    item => {
                        return item.id !== action.payload.id
                    }
                );
            });
        case ActionTypes.ADD_DELIVERY_DATA:
            return produce(state, draft => {
                console.log(action.payload)
                draft.order.delivery = action.payload;
            });
        case ActionTypes.ADD_PAYMENT_MODE:
            return produce(state, draft => {
                draft.order.payment = action.payload.paymentMode
            })
        case ActionTypes.UPDATE_TOTAL:
            return produce(state, draft => {
                draft.order.totalOrderAmount = action.payload.totalOrderAmount;
                draft.order.productsTotal = action.payload.productsTotal;
                draft.order.deliveryFee = action.payload.deliveryFee;
            })
        case ActionTypes.UPDATE_ITEM_AMOUNT:
            return produce(state, draft => {
                //indentify the item before update total item amount
                
                draft.order.items.forEach(item => {
                    const itemToUpdateAmount = action.payload.itemsPrice.find(
                        (selectedItem: CartItemType) => item.id === selectedItem.id
                    )
                    if(itemToUpdateAmount){
                        item.itemAmount = itemToUpdateAmount.itemAmount;
                    }
                    }
                );
                
            })
        case ActionTypes.RESET_STATE: 
            return produce(
                state, draft => {
                    draft.order = action.payload.originalState.order
                }
            );
        default:
            return state;
    }
}