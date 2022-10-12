import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

export const StudentsList = (props) => {
    const [students, setStudents] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:4000/courses/${id}/students`;
        fetch(url)
            .then(response => response.json())
            .then((students) => {
                setStudents(students)
            })
            .catch(error => console.log(error))
    }, [id])

    

    const studentsList = students.map(student => (
        <Student key={student._id} value={student}> </Student>
    ))

    return studentsList.length ? (
        <Grid
            container
            direction="row"> 
            {studentsList} 
        </Grid>
    ) : (
        <h3> No hay estudiantes en este curso </h3>
    );

}

export const Student = (props) => {
    let { id } = useParams();

    function deleteStudent() {
        const url = `http://localhost:4000/courses/${id}/students/${props.value._id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(() => window.location.reload())
    }

    return (
        <Grid
            item
            textAlign="center">
            <Card>
                <CardContent>
                    <Typography
                        marginBottom={5}
                        variant="body1">
                        {props.value.name} {props.value.lastName}
                    </Typography>
                    <Typography
                        variant="body2">
                        DNI : {props.value.dni}
                    </Typography>
                    <Typography
                        variant="body2">
                        Dirección: {props.value.adress}
                    </Typography>
                    <Typography
                        variant="body2">
                        Nota: {props.value.note}
                    </Typography>
                    <Button onClick={() => deleteStudent()}>
                        <DeleteIcon
                            color="secondary"/>
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
