import React, { Component } from 'react';
import { Link } from 'react-router'
import Course from './Course';
class App extends Component {
    constructor(){
        super();
        this.state = {'name':'lol'};
    }
    render() {
        return (
        <div>
            <Course title={this.state.name}/>
            <ul role="nav">
                <li><Link to="/list/good">List</Link></li>
                <li><Link to="/setting">Setting</Link></li>
            </ul>
            {this.props.children}
        </div>
    );
  }
}

export default App;
