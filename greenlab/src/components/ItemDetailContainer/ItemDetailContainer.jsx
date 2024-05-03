import React, { useState, useEffect } from 'react';
import { getDocs, getFirestore, doc} from 'firebase/firestore';
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
                   setProduct(nuevoProducto)

            })
            .catch((error) => console.log(error))

    }, [idProduct]);



    return (
        <div>
            {product ? <ItemDetail producto={product}/> : <p>Cargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;