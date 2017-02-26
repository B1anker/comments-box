/**
 * Created by b1anker on 2017/02/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/commentBox.js';

require('../../node_modules/bootstrap/scss/bootstrap.scss');

const comments = require('../../comments.json');

ReactDOM.render(<AppComponent data={comments} url="/api/comments"/>, document.querySelector('#app'));
