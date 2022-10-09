import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Student } from "../components/studentstList";


export const BestStudent = (props) => {
    const [student, setStudent] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:4000/courses/${id}/bestStudent`;
        fetch(url)
            .then(response => response.json())
            .then((student) => {
                setStudent(student);
            })
            .catch(error => console.log(error));
    }, [id]);

    return student ? (
        <Student key={student.id} value={student}> </Student>
    ) : (
        <div> Cargando... </div>
    );
};
