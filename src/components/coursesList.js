import React from "react";
import Course from "./course"

export class CoursesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: []
        }
    }
    componentDidMount() {
        const url = 'http://localhost:4000/courses';

        fetch(url)
            .then(response => response.json())
            .then(courses => this.setState({ courses }))
            .catch(err => console.log(err));
    }

    render() {
        const coursesList = this.state.courses.map(course => (
            <Course key={course.id} value={course}></Course>
          ))
        return (
            <div>
                {coursesList}
            </div>
        );
    }
}