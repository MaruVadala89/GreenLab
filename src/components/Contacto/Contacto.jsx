import React, { useState } from 'react';
import "./Contacto.css"

const Contacto = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");


    const manejadorFormulario = (event) => {
        event.preventDefault()
        hort
        if (!nombre || !apellido || !telefono || !email || !mensaje) {
            setError("Completar todos los campos requeridos")
            return;
        }
    }

    return (
        <form onSubmit={manejadorFormulario} className='contact-form'>

            <div className='contact-info'>
                <h2 className='title-form'>Contactanos</h2>
                <p>Telefono: 351-2540055</p>
                <p>Email: maru_vad15@hotmail.com</p>
            </div>

            <div className='contact-fields'>
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
                    <label htmlFor="">Mensaje</label>
                    <input type="text" onChange={(e) => setMensaje(e.target.value)} />
                </div>



                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type='submit'>Enviar</button>
            </div>


        </form>
    );
};

export default Contacto;