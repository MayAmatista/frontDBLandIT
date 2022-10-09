import React from "react"
import { useNavigate } from "react-router-dom";

export const NewCourseForm = (props) => {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());

        fetch('http://localhost:4000/courses', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then((data) => data.json())
        .then((course) => navigate(`/courses/${course._id}`))
    }

    

    return (
        <form id="newCourse" onSubmit={handleSubmit}>

            <fieldset>
                <input id="yearOfDictation" placeholder="Año" type="number" name="yearOfDictation" required />
            </fieldset>

            <fieldset>
                <input id="duration" placeholder="Duración" type="text" name="duration" required />
            </fieldset>

            <fieldset>
                <input id="theme" placeholder="Tema" type="text" name="theme" required />
            </fieldset>

            <fieldset>
                <button type="submit" name="submit">Enviar</button>
            </fieldset>
        </form>
    )
}