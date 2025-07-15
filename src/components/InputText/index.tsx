import { InputTextContainer, Text } from "./styles";

interface InputTextProps{
    placeholder: string;
    /* opcional: boolean; */
}

export function InputText(props: InputTextProps) {
    return(
        <InputTextContainer>
            <Text type="text" placeholder={props.placeholder}/>
            Opcional
        </InputTextContainer>
    );
}