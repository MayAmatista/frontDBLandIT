import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import { CourseDetailComponent } from '../components/courseDetail';


export const CourseDetail = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    //tachito borrar curso
    function deleteCourse() {
        const url = `http://localhost:4000/courses/${id}`;

        fetch(url, {
            method: 'DELETE',
        })
        .then(() => navigate('/courses'))
    }

    return (
        <Box>
            <CourseDetailComponent></CourseDetailComponent>
            <Button onClick={deleteCourse}>
                -
            </Button>
        </Box>
    )

}