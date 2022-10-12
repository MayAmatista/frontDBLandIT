import { Box, Button, TextField } from "@mui/material";
import React from "react"
import { Link, useNavigate } from "react-router-dom";

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
        <Box
            id="newCourse"
            onSubmit={handleSubmit}
            component="form"
            display="grid"
            gridTemplateColumns="repeat(5, 4fr)"
            gap={2}
            alignItems="center"
            justifyContent="center"
        >
            <div>
                <TextField
                    required
                    id="yearOfDictation"
                    label="Año"
                    type="number"
                    name="yearOfDictation"
                />
                <TextField
                    required
                    id="duration"
                    label="Duración"
                    type="text"
                    name="duration"
                />
                <TextField
                    required
                    id="theme"
                    label="Tema"
                    type="text"
                    name="theme"
                />
                <Button
                    type="submit"
                    name="submit">
                    Enviar
                </Button>
                <Button
                    component={Link} to={`/courses`}
                    type="submit"
                    name="submit">
                    Cancelar
                </Button>

            </div>
        </Box>
    )
}