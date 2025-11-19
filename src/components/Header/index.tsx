import { CityLocation, HeaderContainer } from "./styles";
import logo from "../../assets/Logo.svg";
import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { Cart } from "../Cart";
import { Link } from "react-router";

export function Header (){
    return(
        <HeaderContainer>
            <Link to="/">
                <span>
                    <img src={logo} alt="Coffee Delivery logo"/>
                </span>
            </Link>
            <div>
                <CityLocation>
                    <MapPinIcon size={22} weight="fill" />
                    Porto Alegre, RS
                </CityLocation>
                <Link to="/checkout">
                    <Cart>
                        <ShoppingCartIcon size={22} weight="fill" />
                    </Cart>
                </Link>
            </div>
        </HeaderContainer>
    );
}