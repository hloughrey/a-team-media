import React from 'react';
import {render} from 'react-dom';
import { Route, Switch } from 'react-router-dom';

// eslint-disable-next-line
import './styles/vendors/app.scss'; // global styles must be imported before components to maintain styling order

// Components
import Page from './components/Page/Page';
import routes from './routes/routes';
import HomePage from './components/HomePage/HomePage';

const App = () => (
	<Page>
		<HomePage />
	</Page>
);

export default App;
