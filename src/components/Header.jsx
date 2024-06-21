import Button from "./UI/Button.jsx";
import { useContext } from "react";

import logoimg from "../assets/logo.jpg";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
const cartCtx = useContext(CartContext);
const userprogressCtx = useContext(UserProgressContext);

const totalCartitems = cartCtx.items.reduce((totalNumberOfitems, item) => {
    return totalNumberOfitems + item.quantity;
}, 0);

function handleShowCart(){
    userprogressCtx.showCart();
}
    return (
    <header id="main-header">
        <div id="title">
            <img  src={logoimg} alt="Food app logo"/>
            <h1>FOOD MART</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartitems})</Button>
        </nav>
    </header>
    );
}