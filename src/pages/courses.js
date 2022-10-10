import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CoursesList } from "../components/coursesList";
import { FilterBar } from "../components/filterBar";


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
        <Box>
            <main>
                <FilterBar courses={allCourses} onSearch={addSearch} onClean={() => setSearchQuery("")}/>
                <Button>
                    <Link to='/courses/newCourse'>
                        +
                    </Link>
                </Button>
                <CoursesList setCourses={setAllCourses} searchQuery={searchQuery}/>
            </main>

        </Box>
    );
}
