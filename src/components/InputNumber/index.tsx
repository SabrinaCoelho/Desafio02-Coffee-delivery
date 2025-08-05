import { useContext, useState, type ChangeEvent } from "react";
import { IncreaseDecreaseButton, InputNumberContainer, InputNumberElement } from "./styles";
import { CartContext } from "../../contexts/CartContext";

interface InputNumberProps{
    coffeId: number
}

export function InputNumber({coffeId}: InputNumberProps){
    const {addItem} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);
    
    function handleOnChange(event: ChangeEvent<HTMLInputElement>){
        const value = parseInt(event.target.value);
        setQuantity(value);
        addItem({
            id: coffeId,
            quantity: value,
            picked: false
        });
    }
    return(
        <InputNumberContainer>
            <IncreaseDecreaseButton>
                &minus;
            </IncreaseDecreaseButton>
            <InputNumberElement 
                onChange={(event) => handleOnChange(event)} 
                type="number"
                value={quantity} 
                min={1}
                size={2}
                max={99}
            />
            <IncreaseDecreaseButton>
                &#x2B;
            </IncreaseDecreaseButton>
        </InputNumberContainer>
    );
}