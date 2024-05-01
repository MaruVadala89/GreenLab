import React, { useState, useEffect } from 'react';
import { collection, deleteAllPersistentCacheIndexes, getDocs, getFirestore, query, where } from 'firebase/firestore';


const IntemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true);

        const db = getFirestore();

        const misProductos = categoryId ? query(collection(db, "Productos"),
            where("categoria", "==", categoryId)) : collection(db, "Productos")

        getDocs(misProductos)

            .then((res) => {
                const nuevosProductos = res.docs.map((doc) => {

                    const data = doc.data()
                    return { id: doc.id, ...data }

                })
                setProducts(nuevosProductos)

            })
            .catch((error) => console.log(error))
            .finally(() => {setLoading(false)})

    }, [categoryId]);



return (
    <>

    { loading ? (<h1>Cargando...</h1>) : (<ItemList products={products}/>)}

    </>
);

}
export default IntemListContainer;