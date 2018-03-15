import React from 'react';
import { render } from 'react-dom';
import App from '../shared/App';
import { BrowserRouter as Router } from 'react-router-dom';

console.log('rendering on client side');

render (
	<Router><App /></Router>, 
	document.getElementById('app')
);