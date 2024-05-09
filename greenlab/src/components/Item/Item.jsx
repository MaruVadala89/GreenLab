import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({product}) => {
    return (
        <>

        <div className='contenedor'>
            <Link to={`/item/${product.id}`} className='link'>
                <h1 className='titulo'>{product.nombre}</h1>
            </Link>

            <img src={product.img} alt={product.nombre}/>


        </div>
            
        </>
    );
};

export default Item;