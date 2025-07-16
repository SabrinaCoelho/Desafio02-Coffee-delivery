import { InputText } from "../../../../components/InputText";
import { FormContainer, InlineForm } from "./styles";

export function AdressForm(){
    return(
        <FormContainer>
            <InputText placeholder="CEP" width="12.5rem"/>
            <InputText placeholder="Rua"  />
            <InlineForm>
                <InputText placeholder="Número" width="12.5rem"/>
                <InputText placeholder="Complemento" optional={true} />
            </InlineForm>
            <InlineForm>
                <InputText placeholder="Bairro" width="12.5rem" />
                <InputText placeholder="Cidade"  />
                <InputText placeholder="UF"  />
            </InlineForm>
        </FormContainer>
    );
}