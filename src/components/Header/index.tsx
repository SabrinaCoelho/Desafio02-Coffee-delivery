import { CityLocation, HeaderContainer } from "./styles";
import logo from "../../assets/Logo.svg";
import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { Cart } from "../Cart";

export function Header (){
    return(
        <HeaderContainer>
            <span>
                <img src={logo} alt="Coffee Delivery logo"/>
            </span>
            <div>
                <CityLocation>
                    <MapPinIcon size={22} weight="fill" />
                    Porto Alegre, RS
                </CityLocation>
                <Cart>
                    <ShoppingCartIcon size={22} weight="fill" />
                </Cart>
            </div>
        </HeaderContainer>
    );
}