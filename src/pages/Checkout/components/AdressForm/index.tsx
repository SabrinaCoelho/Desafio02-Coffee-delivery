import { useFormContext } from "react-hook-form";
import { InputText } from "../../../../components/InputText";
import { FormContainer, InlineForm } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";
import { useContext } from "react";



export function AdressForm(){
    
    const {order} = useContext(CartContext);
    const { register } = useFormContext();
    return(
        <FormContainer>
            <InputText 
                id="zip"
                placeholder="CEP" 
                width="12.5rem"
                {...register("zip")}
            />
            <InputText 
                id="street"
                placeholder="Rua" 
                {...register("street")}
            />
            <InlineForm>
                <InputText 
                    id="number"
                    placeholder="Número" 
                    width="12.5rem"
                    {...register("number")}
                />
                <InputText 
                    id="comple"
                    placeholder="Complemento" 
                    optional={true} 
                    {...register("comple")}
                />
            </InlineForm>
            <InlineForm>
                <InputText 
                    id="neighborhood"
                    placeholder="Bairro" 
                    width="12.5rem" 
                    {...register("neighborhood")}
                />
                <InputText 
                    id="city"
                    placeholder="Cidade" 
                    {...register("city")}
                />
                <InputText
                    id="state"
                    placeholder="UF" 
                    {...register("state")}
                />
            </InlineForm>
        </FormContainer>
    );
}