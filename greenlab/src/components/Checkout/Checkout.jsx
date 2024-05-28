import React, { useContext, useState } from 'react';
import { collection, addDoc, doc, getDoc, updateDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import "./Checkout.css"
const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { cart, total, cantidadTotal, clearCart } = useContext(CartContext)

    const manejadorFormulario = (event) => {
        event.preventDefault()

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completar todos los campos requeridos")
            return;
        }
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }

        const db = getFirestore()

        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "Productos", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        clearCart()
                    })
                    .catch((error) => {
                        setError("Se produjo un error al crear la orden")
                    })
                    .catch((error) => {
                        setError("No se puede actualizar stock, intentelo mas tarde")
                    })
            })

    }

    return (

        <div>
            <h2 className='title'>Ingresa tus datos para finalizar la compra: </h2>

            {
                cart.map((producto) => {
                    <div key={producto.producto.id}>
                        <p>
                            {producto.producto.nombre} x {producto.cantidad}
                        </p>
                        <p>
                            {producto.producto.precio}
                        </p>
                    </div>
                })
            }

            <form className='checkout-form' onSubmit={manejadorFormulario}>

                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="number" onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email de Confirmacion</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type='submit'>Comprar</button>

                {
                    ordenId && (
                        <p>
                            Gracias por adoptar una planta! Tu numero de Id: {ordenId}
                        </p>
                    )
                }

            </form>

        </div>

    );
};

export default Checkout;

