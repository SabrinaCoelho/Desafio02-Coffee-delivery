import { useContext, useMemo, type ReactNode } from "react";
import { CartIconContainer, CartItemsQuantity} from "./styles";
import { CartContext } from "../../contexts/CartContext";

interface CartProps{
    children: ReactNode;
}
export function Cart({children}: CartProps){
    const {order} = useContext(CartContext);

    const itemsQuantity = useMemo(() => {
         return order?.items?.reduce(
            (acu, cur) => {
                return acu + (cur.quantity ?? 0)
            }, 0
        ) ?? 0; 
        }, [order]);

    return(
        <CartIconContainer>
            <CartItemsQuantity>{itemsQuantity}</CartItemsQuantity>
            {children}
        </CartIconContainer>
    );
}