import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from "@phosphor-icons/react";
import { AdvantageItem, AdvantageItemIcon, AdvantagesContainer, HeroContainer, ImageHeroContainer, TextHeroContainer, TitleHeroContainer } from "./styles";
import Caffee_delivey_drink from "../../../../assets/Coffe-delivery-drink.png";
import { TitleXL, TextL_Regular } from "../Typography/styles";

export function Hero(){
    return(
        <HeroContainer>
            <TextHeroContainer>
                <TitleHeroContainer>
                    <TitleXL>
                        Encontre o café perfeito para qualquer hora do dia
                    </TitleXL>
                    <TextL_Regular>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </TextL_Regular>
                </TitleHeroContainer>
                <AdvantagesContainer>
                    <AdvantageItem>
                        <AdvantageItemIcon varaint="yellow-dark">
                            <ShoppingCartIcon size={16} weight="fill" />
                        </AdvantageItemIcon>
                        Compra simples e segura
                    </AdvantageItem>
                    <AdvantageItem>
                        <AdvantageItemIcon varaint="base-text">
                            <PackageIcon size={16} weight="fill" />
                        </AdvantageItemIcon>
                        Embalagem mantém o café intacto
                    </AdvantageItem>
                    <AdvantageItem>
                        <AdvantageItemIcon varaint="yellow">
                            <TimerIcon size={16} weight="fill" />
                        </AdvantageItemIcon>
                        Entrega rápida e rastreada
                    </AdvantageItem>
                    <AdvantageItem>
                        <AdvantageItemIcon varaint="purple">
                            <CoffeeIcon size={16} weight="fill" />
                        </AdvantageItemIcon>
                        O café chega fresquinho até você
                    </AdvantageItem>
                </AdvantagesContainer>
                <ImageHeroContainer>
                    <img src={Caffee_delivey_drink} alt="Copo com bebida."/>
                </ImageHeroContainer>
            </TextHeroContainer>
        </HeroContainer>
        
    );
}