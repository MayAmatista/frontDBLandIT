import { Card } from "@mui/material";
import React from "react";

export class StudentsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
    }
    componentDidMount() {
        const url = 'http://localhost:4000/courses/:id/students';

        fetch(url)
            .then(response => response.json())
            .then(students => this.setState({ students }))
            .then(console.log)
            .catch(err => console.log(err));
    }

    render() {
        const studentsList = this.state.students.map(student => (
            <Student key={student.id} value={student}> </Student>
          ))
        return (
            <div>
                {studentsList}
            </div>
        );
    }
}

const Student = (props) => {
    return(
        <Card>
            <h2>Nombre: {props.value.name}</h2>
            <h2>Apellido: {props.value.lastName}</h2>
            <h2>Dni: {props.value.dni}</h2>
            <h2>Dirección: {props.value.adress}</h2>
            <h2>Nota: {props.value.note}</h2>
        </Card>
    )
}
