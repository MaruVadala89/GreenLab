import React from 'react';
import "./Cartitem.css"

const CartItem = ({CartItem,removeItem}) => {
    return (

        <div key={CartItem.producto.id} className='cart-item'>
            <img src={CartItem.producto.img} alt={CartItem.producto.nombre} />

            <h1 className='name'>{CartItem.producto.nombre}</h1>
            <p> Precio unitario: ${CartItem.producto.precio}</p>
            <p>Stock: {CartItem.producto.stock}</p>
            <p>Cantidad de productos seleccionados: {CartItem.cantidad}</p>
            <p>Precio por cantidad: ${CartItem.cantidad * CartItem.producto.precio}</p>

            <button onClick={() => { removeItem(CartItem.producto.id) }} className='delate-button'>Eliminar producto</button>
        </div>

    );
};

export default CartItem;
