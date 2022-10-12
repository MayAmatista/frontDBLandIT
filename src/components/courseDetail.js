import { Box, Button, CardActions, CardContent, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';

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
        <Box 
            sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography 
                        variant="h3" 
                        component="div"
                        textAlign="center">

                        {course.theme}
                    </Typography>
                    <Typography 
                        variant="h4" 
                        color="text.secondary" 
                        textAlign="center">
                        {course.yearOfDictation}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        textAlign="center">
                        {course.duration}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        variant="outlined"
                        type="submit"
                        component={Link} to={`/courses/${id}/students`}>
                        <PeopleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        Ver lista de estudiantes
                    </Button>
                </CardActions>
        </Box>

    ) : (<div>Cargando...</div>)
}
