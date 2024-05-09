import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const addToCart = () => {
        onAdd(count)
    }

    return (
        <div className="item-count-container">
            <button className="item-count-button" onClick={increment}>Incrementar</button>
            <span className="item-count-number">{count}</span>
            <button className="item-count-button" onClick={decrement}>Decrementar</button>
            <button className="add-to-cart-button" onClick={addToCart}>Agregar al carrito</button>

        </div>
    );
};

export default ItemCount;
