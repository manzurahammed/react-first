import React, { Component } from 'react';

class Course extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>

        );
    }
}

export default Course;
