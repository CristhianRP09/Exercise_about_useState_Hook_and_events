import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Ejercicio1 = ({ currentYear }) => {
    // se define el estado
    let [year, setYear] = useState(currentYear);

    // Se definen las funciones para aumentar, reducir y modificar el año
    const reduceYear = e => setYear(year - 1);

    const editYear = e => {
        let input = e.target.value;

        // Lógica para establecer si la entrada en el input es estrictamente un 
        // número entero (negativos incluidos).
        let isInputInteger = true;

        // Ciclo que recorre cada caracter del input
        for (let k = 0; k < input.length; k++) {
            let charCode = input.charCodeAt(k);  // Esto regresa el código unicode del caracter.

            // Los valores desde 47 hasta 57 del códio unicode corresponden a los
            // caracteres 0 hasta 9
            if (charCode < 48 || charCode > 57) {
                // Excepción del caracter "-" (unicode: 45) para permitir negativos.
                if (k === 0 && charCode === 45) {
                }
                else {
                    isInputInteger = false;
                    break;
                }
            }
        };

        // Imprimir mensaje de error si no se escribe un número entero en el input
        let message = document.getElementById("invalidInput");
        if (input === "" || input === "-") {
            setYear(currentYear);
            message.innerHTML = "";
        } else if (!isInputInteger) {
            setYear(currentYear);
            message.innerHTML = "Entrada inválida";
        } else {
            let newYear = parseInt(input);
            setYear(newYear);
            message.innerHTML = "";
        };
    };

    const increaseYear = e => setYear(year + 1);

    // rederización de componente
    return (
        <div>
            <h1>Año: {year}</h1>
            <button onClick={reduceYear} >-</button>
            <input id="yearInput" type="text" placeholder="Ingresa un año"
                onChange={editYear} />
            <button onClick={increaseYear} >+</button>
            <p id="invalidInput"></p>
        </div>
    )
}

Ejercicio1.propTypes = {
    currentYear: PropTypes.number.isRequired
};