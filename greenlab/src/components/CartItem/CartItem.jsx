import React from 'react';

const CartItem = ({CartItem,removeItem}) => {
    return (

        <div key={CartItem.producto.id}>
            <img src={CartItem.producto.img} alt={CartItem.producto.nombre} />
            <h1>{CartItem.producto.nombre}</h1>
            <p>{CartItem.producto.precio}</p>
            <p>{CartItem.producto.stock}</p>
            <p>{CartItem.producto.descripcion}</p>
            <p>{CartItem.cantidad}</p>
            <p>{CartItem.cantidad * CartItem.producto.precio}</p>
            <button onClick={() => { removeItem(CartItem.producto.id) }}>ELIMINAR PRODUCTO</button>
        </div>

    );
};

export default CartItem;
