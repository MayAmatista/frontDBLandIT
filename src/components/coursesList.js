import React from "react";
import Course from "./course"

export class CoursesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        };
    }

    getCourses = (callback) => {
        const url = `http://localhost:4000/courses?${this.props.searchQuery}`;

        fetch(url)
            .then(response => response.json())
            .then((courses) => {
                this.setState({courses: courses});
                callback(courses);
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getCourses((courses) => this.props.setCourses(courses));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchQuery !== this.props.searchQuery) {
            this.getCourses()
        }
    }

    render() {
        const coursesList = this.state.courses.map(course => (
            <Course className='course' key={course.id} value={course}></Course>
        ))
        return (
            <div>
                {coursesList}
            </div>
        );
    }
}