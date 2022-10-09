import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CoursesList } from "../components/coursesList";


export const Courses = (props) => {
    //nav con filtros
    //botón cerrar sesión
    return (
        <Box>
            <main>
                <Button>
                        V
                </Button>
                <Button>
                        V
                </Button>
                <Button>
                    <Link to='/courses/newCourse'>
                        +
                    </Link>
                </Button>
                <CoursesList />
            </main>

        </Box>
    );
}
