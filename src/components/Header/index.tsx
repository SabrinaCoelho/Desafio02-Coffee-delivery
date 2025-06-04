import { CityLocation, HeaderContainer } from "./styles";
import logo from "../../assets/Logo.svg";
import { MapPinIcon } from "@phosphor-icons/react";

export function Header (){
    return(
        <HeaderContainer>
            <span>
                <img src={logo} alt="Coffee Delivery logo"/>
            </span>
            <CityLocation>
                <MapPinIcon size={22} weight="fill" />
                Porto Alegre, RS
            </CityLocation>
        </HeaderContainer>
    );
}