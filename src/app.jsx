import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecision-app';

const appRoot = document.getElementById('app');

IndecisionApp.defaultProps = {
    options: []
}

ReactDOM.render(<IndecisionApp />, appRoot);