import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import './index.css';
import App from './App';

import List from './pages/List';
import Setting from './pages/Setting';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route path="/list(/:username)" component={List}/>
        <Route path="/setting" component={Setting}/>
    </Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
