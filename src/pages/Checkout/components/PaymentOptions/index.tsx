import { useFormContext } from "react-hook-form";
import { Mode, PaymentOptionsContainer } from "./styles";
import { BankIcon, CreditCardIcon, MoneyIcon } from "@phosphor-icons/react";

export function PaymentOptions(){
    const { register } = useFormContext();
    return(
        <PaymentOptionsContainer>
            <Mode>
                <input type="radio" {...register("pay_mode")} value="credit"/>
                <CreditCardIcon size={16} />
                Cartão de crédito
            </Mode>
            <Mode>
                <input type="radio" {...register("pay_mode")} value="debit"/>
                <BankIcon size={16} />
                Cartão de dédito
            </Mode>
            <Mode>
                <input type="radio" {...register("pay_mode")} value="cash" />
                <MoneyIcon size={16} />
                Dinheiro
            </Mode>
        </PaymentOptionsContainer>
    );
}