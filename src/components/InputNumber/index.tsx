import { useContext, useState, type ChangeEvent } from "react";
import { IncreaseDecreaseButton, InputNumberContainer, InputNumberElement } from "./styles";
import { CartContext, type CartItemType } from "../../contexts/CartContext";

interface InputNumberProps{
    // coffeId: number,
    itemId: number;
    itemQty: number;
    handleOnChangeQty: (event: any) => void;
    /* handleOnClickIncrease: () => void;
    handleOnClickDecrease: () => void; */
}

export function InputNumber({itemId, itemQty, handleOnChangeQty}: InputNumberProps){
    const { order, decreaseItem, increaseItem } = useContext(CartContext);
    
    function handleOnClickIncrease(){
        //check if already on cart
        if(checkAlreadyOnCart()){
            increaseItem(itemId);
        }else{
            handleOnChangeQty(itemQty + 1);
        }
    }

    function handleOnClickDecrease(){
        console.log("DECREASE ITEM")
        //check if already on cart
        if(checkAlreadyOnCart()){
            decreaseItem(itemId);
        }else{
            handleOnChangeQty(itemQty - 1);
        }
    }

    function checkAlreadyOnCart(){
        return order?.items.find((item: CartItemType) => item.id === itemId);
    }

    return(
        <InputNumberContainer>
            <IncreaseDecreaseButton onClick={() => handleOnClickDecrease()}>
                &minus;
            </IncreaseDecreaseButton>
            <InputNumberElement 
                onChange={(event) => handleOnChangeQty(event)} 
                type="number"
                value={itemQty} 
                min={1}
                size={2}
                max={99}
            />
            <IncreaseDecreaseButton onClick={() => handleOnClickIncrease()}>
                &#x2B;
            </IncreaseDecreaseButton>
        </InputNumberContainer>
    );
}