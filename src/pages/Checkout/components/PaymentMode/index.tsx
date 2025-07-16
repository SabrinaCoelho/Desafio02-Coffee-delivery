import { CreditCardIcon } from "@phosphor-icons/react";
import { Mode, PaymentModeContainer } from "./styles";

export function PaymentMode(){
    return(
        <PaymentModeContainer>
            <Mode>
                <input type="checkbox" />
                <CreditCardIcon size={16} />
                Cartão de crédito
            </Mode>
        </PaymentModeContainer>
    );
}