import { Button, Grid } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CourseDetailComponent } from '../components/courseDetail';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';



export const CourseDetail = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    //tachito borrar curso
    function deleteCourse() {
        const url = `http://localhost:4000/courses/${id}`;

        fetch(url, {
            method: 'DELETE',
        })
            .then(() => navigate('/courses'))
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Button component={Link} to='/courses'>
                    <ArrowBackOutlinedIcon />
                    Volver
                </Button>

                <Button
                    size="small"
                    onClick={deleteCourse}
                >
                    Borrar curso
                    <DeleteIcon />
                </Button>
            </Grid>
            <CourseDetailComponent />
        </Grid>

    )

}