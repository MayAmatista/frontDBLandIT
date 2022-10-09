import { Box, Button, CardActions, CardContent, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


export const CourseDetailComponent = (props) => {
    const [course, setCourse] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:4000/courses/${id}`;

        fetch(url)
            .then(response => response.json())
            .then((course) => {
                setCourse(course)
            })
            .catch(error => console.log(error))
    }, [id])

    return course ? (
        <Box sx={{ minWidth: 275 }}>
            <React.Fragment>
                <CardContent variant="outlined">
                    <Typography variant="h5" component="div">
                        {course.theme}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {course.yearOfDictation}
                    </Typography>
                    <Typography variant="body2">
                        {course.duration}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">
                    <Link to= {`/courses/${id}/students`}>
                        Ver lista de estudiantes
                    </Link>
                </Button>
            </CardActions>
            </React.Fragment>
        </Box>

    ) : (<div>Cargando...</div>)
}
