import { Button, ButtonBase } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { StudentsList } from "../components/studentstList";


export const Students = (props) => {
    let { id } = useParams();

    return (
        <main>
            <StudentsList />
            <Button>
                <Link to={`/courses/${id}/students/newStudent`}>
                    +
                </Link>
            </Button>
            <ButtonBase>
                <Link to={`/courses/${id}/bestStudent`}>
                    *
                </Link>
            </ButtonBase>
        </main>
    );
}