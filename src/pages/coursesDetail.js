import { Button, CardActions } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { CourseDetailComponent } from '../components/courseDetail';


export const CourseDetail = (props) => {
    //tachito borrar curso
    //componente ver detalle de estudiantes
    return (
        <Box>
            <CourseDetailComponent></CourseDetailComponent>
            <CardActions>
                <Button size="small">
                    <Link to='/courses/:id/students'>
                        Ver lista de estudiantes
                    </Link>
                </Button>
            </CardActions>
        </Box>
    )

}