import React, { useState } from 'react';

export const MiPrimerEstado = () => {

    // PROBLEMATICA!!!
    // let nombre = "Víctor Robles";

    // const cambiarNombre = e => {
    //     nombre = "Paco";
    // };

    let [nombre, setNombre] = useState("Víctor Robles");

    const cambiarNombre = (e, name) => {
        setNombre(name);
    };

    return (
        <div>
            <h1>Componente: Mi primer estado</h1>
            <strong>{nombre}</strong>
            <br /><br />
            <button onClick={e => cambiarNombre(e, "Pacho")}>
                Cambiar nombre
            </button>
            <br /><br />
            <input type="text" placeholder='Change the name' onChange={ e => cambiarNombre(e, e.target.value) } />
        </div>
    )
}
