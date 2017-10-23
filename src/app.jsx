import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecision-app';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appRoot = document.getElementById('app');

IndecisionApp.defaultProps = {
    options: []
}

ReactDOM.render(<IndecisionApp />, appRoot);