import { Button, Card } from "@mui/material";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

    function deleteStudent(studentId){
        const url = `http://localhost:4000/courses/${id}/students/${studentId}`;

        fetch(url, {
            method: 'DELETE'
        })
        .then(() => window.location.reload())
    }

    const studentsList = students.map(student => (
        <div>
            <Button onClick= {() => deleteStudent(student._id)}>
                -
            </Button>
            <Student key={student._id} value={student}> </Student>
        </div>
    ))

    return studentsList.length ? (
        <div> {studentsList} </div>
    ) : (
        <h3> No hay estudiantes en este curso </h3>
    );

}

export const Student = (props) => {
    return (
        <Card>
            <h2>Nombre: {props.value.name}</h2>
            <h2>Apellido: {props.value.lastName}</h2>
            <h2>Dni: {props.value.dni}</h2>
            <h2>Dirección: {props.value.adress}</h2>
            <h2>Nota: {props.value.note}</h2>
        </Card>
    )
}

