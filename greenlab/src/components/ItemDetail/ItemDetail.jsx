import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ producto }) => {

    const [quantity, setQuantity] = useState(0)
    const { addToCart } = useContext(CartContext)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addToCart(producto, cantidad)
    }


    return (
        <div className='center-container'>
            <div className='detail-container'>

                <div className='detail-img'>
                    <img src={producto.img} alt={producto.nombre} />
                    <p className='detail-img-p'> {producto.descripción}</p>
                </div>

                <div className='datail-info'>
                    <h2>{producto.nombre}</h2>
                    <p className='detail-info-p'>Stock: {producto.stock}</p>
                    <p className='detail-info-p'>Precio: ${producto.precio}</p>
                    <p className='detail-info-p'>Categoria: {producto.categoria}</p>
                    {quantity == 0
                        ?
                        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                        :
                        <Link to={"/Cart"}>Ir al Carrito</Link>}
                </div>

            </div>
        </div>
    );
};

export default ItemDetail;
