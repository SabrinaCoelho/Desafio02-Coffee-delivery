import { useContext } from "react";
import { IncreaseDecreaseButton, InputNumberContainer, InputNumberElement } from "./styles";
import { CartContext, type CartItemType } from "../../contexts/CartContext";

interface InputNumberProps{
    itemId: number;
    itemQty: number;
    handleOnChangeQty: (event: any) => void;
}

export function InputNumber({itemId, itemQty, handleOnChangeQty}: InputNumberProps){
    const { order, decreaseItem, increaseItem, removeItem } = useContext(CartContext);
    
    function handleOnClickIncrease(){
        //check if already on cart
        if(checkAlreadyOnCart()){
            increaseItem(itemId);
        }else{
            handleOnChangeQty(itemQty + 1);
        }
    }

    function handleOnClickDecrease(){
        //check if already on cart
        if(checkAlreadyOnCart()){
            decreaseItem(itemId);
        }
        if(itemQty - 1 === 0){
            removeItem(itemId);
            handleOnChangeQty(itemQty - 1);
        }else{
            handleOnChangeQty(itemQty - 1);
        }
    }

    function checkAlreadyOnCart(){
        return order?.items ? order?.items.find((item: CartItemType) => item.id === itemId) : false;
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
                min={0}
                size={2}
                max={99}
            />
            <IncreaseDecreaseButton onClick={() => handleOnClickIncrease()}>
                &#x2B;
            </IncreaseDecreaseButton>
        </InputNumberContainer>
    );
}