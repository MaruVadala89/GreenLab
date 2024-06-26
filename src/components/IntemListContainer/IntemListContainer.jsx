import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"

const IntemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

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
            .finally(() => { setLoading(false) })

    }, [categoryId]);



    return (
        <>

            {loading ? 
            
            (<h3 className='cargando' style={{height:"1200px"}}>Cargando...</h3>) : (<ItemList products={products}/>)}

        </>
    );

}
export default IntemListContainer;