import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, total, clearCart, removeItem } = useContext(CartContext);

    return (
        <div>
            <h1>Tu Carrito</h1>

            {
                cart.length == 0 ?
                    <div>
                        <h2>No hay productos en el carrito</h2>
                        <Link to={"/"}>Ir al inicio</Link>
                    </div>
                    :
                    <div>
                        {
                            cart.map((p) => (
                                <CartItem key={p.producto.id} CartItem={p} removeItem={removeItem} />
                            ))
                        }
                        <h2>Valor total: ${total}</h2>
                        <button onClick={() => { clearCart() }}>Limpiar carrito</button>
                        <Link to={"/Checkout"}>Terminar la compra</Link>

                    </div>
            }

        </div>
    )
}

export default Cart;



