import { InputTextContainer, Text } from "./styles";
import type { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    optional?: boolean;
    width?: "full" | "12.5rem";
}

export function InputText({optional = false, width = "full", ...props}: InputTextProps) {
    return(
        <InputTextContainer width={width}>
            <Text type="text" placeholder={props.placeholder} {...props}/>
            {optional && (<span>Opcional</span>)}
        </InputTextContainer>
    );
}