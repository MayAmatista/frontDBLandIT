import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CoursesList } from "../components/coursesList";
import { FilterBar } from "../components/filterBar";
import AddIcon from '@mui/icons-material/Add';


export const Courses = (props) => {
    const [search] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
    const [allCourses, setAllCourses] = useState([]);
    //nav con filtros
    //botón cerrar sesión

    function addSearch(searchField) {
        Object.assign(search, searchField);
        setSearchQuery(new URLSearchParams(search).toString());
    }

    return (
        <main>
            <Grid
                container
                rowSpacing={5} 
                direction="column"
                alignItems="center"
            >
                <Grid
                    item>
                    <FilterBar courses={allCourses} onSearch={addSearch} onClean={() => setSearchQuery("")} />
                </Grid>
                <Grid
                    item>
                    <CoursesList setCourses={setAllCourses} searchQuery={searchQuery} />
                </Grid>
                <Grid
                    item>
                    <Button
                        label="nuevo curso"
                        size="small"
                        component={Link} to='/courses/newCourse'>
                        <AddIcon />
                        Agregar curso
                    </Button>
                </Grid>
            </Grid>
        </main>
    );
}


