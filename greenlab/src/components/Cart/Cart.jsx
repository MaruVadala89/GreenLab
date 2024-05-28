import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {

    const { cart, total, clearCart, removeItem } = useContext(CartContext);

    return (
        <div>
            <h1 className="cart">Tu Carrito</h1>

            {
                cart.length == 0 ?
                    <div>
                        <h2>No hay productos en el carrito</h2>
                        <Link to={"/"}>Ir al inicio</Link>
                    </div>
                    :
                    <div className="cart-container">
                        {
                            cart.map((p) => (
                                <CartItem key={p.producto.id} CartItem={p} removeItem={removeItem} />
                            ))
                        }

                        <div className="cart-footer">
                            <h2 className="total">Valor total: ${total}</h2>

                            <button onClick={() => { clearCart() }} className="clean-button">Limpiar carrito</button>

                            <Link to={"/Checkout"} className="end-button">Terminar la compra</Link>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Cart;



