import { useFormContext } from "react-hook-form";
import { InputText } from "../../../../components/InputText";
import { FormContainer, InlineForm } from "./styles";
import { useHookFormMask } from 'use-mask-input';

export function AdressForm(){
    const { register, formState: { errors } } = useFormContext();
    const registerWithMask = useHookFormMask(register);
     
    return(
        <FormContainer>
            <InputText
                {...registerWithMask("zip", ['9999-999'], { showMaskOnFocus: true })}
                type="text"
                placeholder="CEP" 
            />
            <InputText 
                id="street"
                placeholder="Rua" 
                {...register("street")}
                errorMessage={errors && errors.street && `${errors.street?.message}`}
            />
            <InlineForm>
                <InputText 
                    id="number"
                    placeholder="Número" 
                    width="12.5rem"
                    {...register("number")}
                    errorMessage={errors && errors.number && `${errors.number?.message}`}
                />
                <InputText 
                    id="comple"
                    placeholder="Complemento" 
                    optional={true} 
                    {...register("comple")}
                    errorMessage={errors && errors.comple && `${errors.comple?.message}`}
                />
            </InlineForm>
            <InlineForm>
                <InputText 
                    id="neighborhood"
                    placeholder="Bairro" 
                    width="12.5rem" 
                    {...register("neighborhood")}
                    errorMessage={errors && errors.neighborhood && `${errors.neighborhood?.message}`}
                />
                <InputText 
                    id="city"
                    placeholder="Cidade" 
                    {...register("city")}
                    errorMessage={errors && errors.city && `${errors.city?.message}`}
                />
                <InputText
                    id="state"
                    placeholder="UF" 
                    {...register("state")}
                    errorMessage={errors && errors.state && `${errors.state?.message}`}
                />
            </InlineForm>
        </FormContainer>
    );
}