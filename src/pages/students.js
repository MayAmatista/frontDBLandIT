import { Button } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { StudentsList } from "../components/studentstList";
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


export const Students = (props) => {
    let { id } = useParams();

    return (
        <main>
            <Button
                component={Link} to={`/courses/${id}`}>
                <ArrowBackOutlinedIcon />
                Volver
            </Button>
            <Button
                label="Agregar estudiante"
                size="small"
                component={Link} to={`/courses/${id}/students/newStudent`}>
                <AddIcon />
            </Button>
            <Button
                label="Agregar estudiante"
                size="small"
                component={Link} to={`/courses/${id}/bestStudent`}>
                <StarIcon />
            </Button>
            <StudentsList />
        </main>
    );
}