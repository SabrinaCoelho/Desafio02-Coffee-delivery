import type { CartItemType, Delivery, Payment } from "../../contexts/CartContext";
import type { CartState } from "./reducer";

export const ActionTypes = {
    ADD_ITEM: "ADD_ITEM",
    INCREASE_ITEM: "INCREASE_ITEM",
    DECREASE_ITEM: "DECREASE_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
    ADD_DELIVERY_DATA: "ADD_DELIVERY_DATA",
    ADD_PAYMENT_MODE: "ADD_PAYMENT_MODE",
    PICKED_ITEM: "PICKED_ITEM",
    GET_SELECTED_ITEMS: "GET_SELECTED_ITEMS",
    UPDATE_TOTAL: "UPDATE_TOTAL",
    UPDATE_ITEM_AMOUNT: "UPDATE_ITEM_AMOUNT",
    RESET_STATE: "RESET_STATE"
}

export function addCartItemAction(newItem: CartItemType){
    return{
        type: ActionTypes.ADD_ITEM,
        payload: {
            newItem
        }
    }
}

export function increaseItemAction(id: CartItemType["id"]){
    return {
        type: ActionTypes.INCREASE_ITEM,
        payload: {
            id
        }
    }
}

export function decreaseItemAction(id: CartItemType["id"]){
    return {
        type: ActionTypes.DECREASE_ITEM,
        payload: {
            id
        }
    }
}

export function removeItemAction(id: CartItemType["id"]){
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            id
        }
    }
}

export function addDeliveryDataAction(deliveryData: Delivery){
    return{
        type: ActionTypes.ADD_DELIVERY_DATA,
        payload: {
            ...deliveryData
        }
    }
}

export function addPaymentModeAction(paymentMode: Payment){
    return{
        type: ActionTypes.ADD_PAYMENT_MODE,
        payload:{
            paymentMode
        }
    }
}

export function getSelectedItemsAction(){
    return{
        type: ActionTypes.GET_SELECTED_ITEMS,
        payload: {}
    }
}

export function updateTotalAction({totalOrderAmount, productsTotal, deliveryFee}: any){
    return{
        type: ActionTypes.UPDATE_TOTAL,
        payload: {
            totalOrderAmount,
            productsTotal,
            deliveryFee
        }
    }
}

export function updateItemAmountAction(itemsPrice: any[]){
    return{
        type: ActionTypes.UPDATE_ITEM_AMOUNT,
        payload: {
            itemsPrice
        }
    }
}

export function resetStateAction(originalState: CartState){
    return{
        type: ActionTypes.RESET_STATE,
        payload: {
            originalState
        }
    }
}