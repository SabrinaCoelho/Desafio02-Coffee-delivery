import type { ReactNode } from "react";
import { CartContainer } from "./styles";

interface CartProps{
    children: ReactNode;
}
export function Cart({children}: CartProps){
    return(
        <CartContainer>
            {children}
        </CartContainer>
    );
}