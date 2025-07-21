import { Mode, PaymentModeContainer } from "./styles";
import { BankIcon, CreditCardIcon, MoneyIcon } from "@phosphor-icons/react";

export function PaymentMode(){
    return(
        <PaymentModeContainer>
            <Mode>
                <input type="checkbox" />
                <CreditCardIcon size={16} />
                Cartão de crédito
            </Mode>
            <Mode>
                <BankIcon size={16} />
                Cartão de dédito
            </Mode>
            <Mode>
                <MoneyIcon size={16} />
                Dinheiro
            </Mode>
        </PaymentModeContainer>
    );
}