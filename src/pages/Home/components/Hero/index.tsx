import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from "@phosphor-icons/react";
import { AdvantageItem, AdvantageItemIcon, AdvantagesContainer, HeroContainer, ImageHeroContainer, Subtitle, TextHeroContainer, Title, TitleHeroContainer } from "./styles";
import Caffee_delivey_drink from "../../../../assets/Coffe-delivery-drink.png";

export function Hero(){
    return(
        <HeroContainer>
            <TextHeroContainer>
                <TitleHeroContainer>
                    <Title>
                        Encontre o café perfeito para qualquer hora do dia
                    </Title>
                    <Subtitle>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </Subtitle>
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