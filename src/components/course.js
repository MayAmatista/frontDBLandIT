import React from "react";
import { Link } from "react-router-dom";

export default class Course extends React.Component {

    render() {
      return (
        <Link to={this.props.value.id}>
            <h2> {this.props.value.theme} </h2>
            <h3> {this.props.value.yearOfDictation} </h3>
        </Link>
      );
    }
}
  
