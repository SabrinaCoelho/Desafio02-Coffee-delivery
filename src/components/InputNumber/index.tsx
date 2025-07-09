import { IncreaseDecreaseButton, InputNumberContainer, InputNumberElement } from "./styles";


export function InputNumber(){
    return(
        <InputNumberContainer>
            <IncreaseDecreaseButton>
                &minus;
            </IncreaseDecreaseButton>
            <InputNumberElement type="number" min={1} size={2} max={99}/>
            <IncreaseDecreaseButton>
                &#x2B;
            </IncreaseDecreaseButton>
        </InputNumberContainer>
    );
}