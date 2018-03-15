import React from 'react';
import {render} from 'react-dom';
import { Route, Switch } from 'react-router-dom';

// eslint-disable-next-line
import './styles/vendors/app.scss'; // global styles must be imported before components to maintain styling order

// Components
import Page from './components/Page/Page';
import routes from './routes/routes';

const App = () => (
	<Page>
		{routes.map((i, key) =>
			<Route 
				path={i.path} 
				component={i.component} 
				exact={i.exact} 
				key={key} 
			/> 
		)}
	</Page>

);

export default App;
