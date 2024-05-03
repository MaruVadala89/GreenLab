import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { idProduct } = useParams();

    useEffect(() => {

        const db = getFirestore();

        const nuevoDoc = doc(db, "Productos", idProduct)

        getDocs(nuevoDoc)

            .then((res) => {
                

                    const data = doc.data()
                   const nuevoProducto = { id: res.id, ...data }
                   setProducts(nuevoProducto)

            })
            .catch((error) => console.log(error))

    }, [categoryId]);



    return (
        <div>
            
        </div>
    );
};

export default ItemDetailContainer;