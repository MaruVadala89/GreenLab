import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ product }) => {




    return (
        <>
            <div className='contenedor'>

                <Link to={`/item/${product.id}`} className='link'>
                <img src={product.img} alt={product.nombre} className='img' />
                </Link>

                <Link to={`/item/${product.id}`} className='link'>
                    <h1 className='titulo'>{product.nombre}</h1>
                </Link>

                <p className='precio'>Precio: ${product.precio}</p>


                <Link to={`/item/${product.id}`} className='link'>
                    <button className="add-to-cart-button-2">Agregar al carrito</button>
                </Link>


            </div>

        </>
    );
};

export default Item;