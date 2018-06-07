import React, { Component } from 'react';
class List extends Component {
    render() {
        return (
            <div>
                List
                {(this.props.params.username)}
            </div>
        );
    }
}

export default List;