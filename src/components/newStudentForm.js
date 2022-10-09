import React from "react"
import { useNavigate, useParams } from "react-router-dom";

export const NewStudentForm = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());

        fetch(`http://localhost:4000/courses/${id}/students`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then(() => navigate(`/courses/${id}/students`))
    }

    

    return (
        <form id="newStudent" onSubmit={handleSubmit}>

            <fieldset>
                <input id="name" placeholder="Nombre" type="text" name="name" required />
            </fieldset>

            <fieldset>
                <input id="lastName" placeholder="Apellido" type="text" name="lastName" required />
            </fieldset>

            <fieldset>
                <input id="dni" placeholder="DNI" type="number" name="dni" required />
            </fieldset>

            <fieldset>
                <input id="adress" placeholder="Dirección" type="text" name="adress" required />
            </fieldset>

            <fieldset>
                <input id="note" placeholder="Nota" type="note" name="note" required />
            </fieldset>

            <fieldset>
                <button type="submit" name="submit">Enviar</button>
            </fieldset>
        </form>
    )
}