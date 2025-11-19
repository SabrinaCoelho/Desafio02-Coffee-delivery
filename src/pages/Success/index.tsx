import { CurrencyDollarIcon, MapPinIcon, TimerIcon } from "@phosphor-icons/react";
import { defaultTheme } from "../../styles/default";
import { TextL_Regular, TextM_Regular, TitleL } from "../Home/components/Typography/styles";
import { DeliveryRecapContainer, DeliveryRecapInfo, IconCircleBox, SuccessContainer, SuccessContent, SuccessImage, SuccessMessageTitle } from "./styles";
import { useContext, useRef } from "react";
import { CartContext } from "../../contexts/CartContext";
import illustration from "../../assets/Illustration.png";

export function Success(){
    const {order, resetState} = useContext(CartContext);
    const {current} = useRef(order);
    resetState();
    console.log(current)
    
    return(
        <SuccessContainer>
            <SuccessMessageTitle>
                <TitleL color={defaultTheme["yellow-dark"]}>Uhu! Pedido confirmado</TitleL>
                <TextL_Regular>Agora é só aguardar que logo o café chegará até você</TextL_Regular>
            </SuccessMessageTitle>
            
            <SuccessContent>
                <DeliveryRecapContainer>
                    <DeliveryRecapInfo>
                        <div>
                            <IconCircleBox color={defaultTheme["purple"]}>
                                <MapPinIcon size={16} weight="fill" color={defaultTheme["background"]} />
                            </IconCircleBox>
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <TextM_Regular>
                                Entrega em <strong>{current?.delivery?.street}, {current?.delivery?.number}</strong>
                            </TextM_Regular>
                            <TextM_Regular>
                                {current?.delivery?.neighborhood}, {current?.delivery?.city}, {current?.delivery?.state}
                            </TextM_Regular>
                        </div>
                    </DeliveryRecapInfo>
                    <DeliveryRecapInfo>
                        <div>
                            <IconCircleBox color={defaultTheme["yellow"]}>
                                <TimerIcon size={16} weight="fill" color={defaultTheme["background"]}/>
                            </IconCircleBox>
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <TextM_Regular>
                                Previsão de entrega
                            </TextM_Regular>
                            <TextM_Regular>
                                <strong>20 - 30 minutos</strong>
                            </TextM_Regular>
                        </div>
                    </DeliveryRecapInfo>
                    <DeliveryRecapInfo>
                        <div>
                            <IconCircleBox color={defaultTheme["yellow-dark"]}>
                                <CurrencyDollarIcon size={16} weight="fill" color={defaultTheme["background"]} />
                            </IconCircleBox>
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <TextM_Regular>
                                Pagamento na entrega
                            </TextM_Regular>
                            <TextM_Regular>
                                <strong>
                                    {
                                        current?.payment?.mode === "credit" ? "Cartão de crédito"
                                        : current?.payment?.mode === "debit" ? "Cartão de débito"
                                        : "Dinheiro"
                                    }
                                </strong>
                            </TextM_Regular>
                        </div>
                    </DeliveryRecapInfo>
                </DeliveryRecapContainer> 
                <SuccessImage>
                    <img src={illustration} alt="Evandro"/>
                </SuccessImage>  
            </SuccessContent>
        </SuccessContainer>
    )
}