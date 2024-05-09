import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ product }) => {
    return (
        <>
            <div className='contenedor'>

                <img src={product.img} alt={product.nombre} className='img' />

                <Link to={`/item/${product.id}`} className='link'>
                    <h1 className='titulo'>{product.nombre}</h1>
                </Link>

                <p className='precio'>Precio: ${product.precio}</p>

            </div>

        </>
    );
};

export default Item;