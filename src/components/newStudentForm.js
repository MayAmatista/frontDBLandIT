import { Box, Button, TextField } from "@mui/material";
import React from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

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
        <Box
            id="newStudent"
            onSubmit={handleSubmit}
            component="form"
            display="grid"
            gridTemplateColumns="repeat(5, 4fr)"
            gap={2}
            alignItems="center"
            justifyContent="center">
            <div>
                <TextField
                    required
                    id="name"
                    label="Nombre"
                    type="text"
                    name="name"/>
                <TextField
                    required
                    id="lastName"
                    label="Apellido"
                    type="text"
                    name="lastName"/>
                <TextField
                    required
                    id="dni"
                    label="DNI"
                    type="number"
                    name="dni"/>
                <TextField
                    required
                    id="adress"
                    label="Dirección"
                    type="text"
                    name="adress"/>
                <TextField
                    required
                    id="note"
                    label="Nota"
                    type="number"
                    name="note"/>
                <Button
                    type="submit"
                    name="submit">
                    Enviar
                </Button>
                <Button
                    component={Link} to={`/courses/${id}/students`}
                    type="submit"
                    name="submit">
                    Cancelar
                </Button>
            </div>
        </Box>
    )
}
