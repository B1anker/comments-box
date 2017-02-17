/**
 * Created by b1anker on 2017/02/17.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const AppComponent = require('./components/productBox.js');

require('../node_modules/bootstrap/scss/bootstrap.scss');
ReactDOM.render(<AppComponent />, document.getElementById('content'));
