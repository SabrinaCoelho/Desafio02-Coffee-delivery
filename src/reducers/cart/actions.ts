import type { CartItem, Delivery, Payment } from "../../contexts/CartContext";

export enum ActionTypes{
    ADD_ITEM = "ADD_ITEM",
    INCREASE_ITEM = "INCREASE_ITEM",
    DECREASE_ITEM = "DECREASE_ITEM",
    CHANGE_ITEM_UNIT = "CHANGE_ITEM_UNIT",
    ADD_DELIVERY_DATA = "ADD_DELIVERY_DATA",
    ADD_PAYMENT_MODE = "ADD_PAYMENT_MODE"
}

export function addCartItemAction(newItem: CartItem){
    return{
        type: ActionTypes.ADD_ITEM,
        payload: {
            newItem
        }
    }
}

export function increaseItemAction(id: CartItem["id"]){
    return {
        type: ActionTypes.INCREASE_ITEM,
        payload: {
            id
        }
    }
}

export function deacreaseItemAction(id: CartItem["id"]){
    return {
        type: ActionTypes.INCREASE_ITEM,
        payload: {
            id
        }
    }
}

export function updateItemUnitAction(item: CartItem){
    return{
        type: ActionTypes.CHANGE_ITEM_UNIT,
        payload: {
            item
        }
    }
}

export function addDeliveryDataAction(deliveryData: Delivery){
    return{
        type: ActionTypes.ADD_DELIVERY_DATA,
        payload: {
            deliveryData
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