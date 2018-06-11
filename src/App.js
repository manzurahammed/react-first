import React, { Component } from 'react';
import { Link } from 'react-router'
import Course from './Course';
import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

const int = {
    fatching:false,
    fatched:false,
    users:[],
    error:null
}

const reducer = (state=int,action)=>{
    switch (action.type){
        case "FEATCH_PENDING": {
            state = {...state,fatching:true}
        }
        case "FEATCH_FULFILLED": {
            state = {...state,fatching:false,fatched:true,users:action.p}
            break;
        }
        case "FEATCH_REJECTED":{
            state = {...state,fatching:false,error:action.p}
            break;
        }
    }
    return state;
};

const store = createStore(reducer,applyMiddleware(promise(),thunk,logger));
store.dispatch({
    type:"FEATCH",
    payload:axios.get("http://rest.learncode.academy/api/westren/users")
});



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
