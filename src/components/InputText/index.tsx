import { MessageError } from "../../pages/Checkout/components/AdressForm/styles";
import { InputTextContainer, Text } from "./styles";
import type { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    optional?: boolean;
    width?: "full" | "12.5rem";
    errorMessage?: string;
}

export function InputText({optional = false, width = "full", ...props}: InputTextProps) {
    return(
        <label>
            <InputTextContainer width={width}>
                <Text type="text" placeholder={props.placeholder} {...props}/>
                {optional && (<span>Opcional</span>)}
            </InputTextContainer>
            <MessageError>{props.errorMessage}</MessageError>
        </label>
    );
}