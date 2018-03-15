// SERVER SIDE RENDERING

// BASE IMPORTS
// ========================================
import express from 'express';
// import Helmet from 'helmet';
import React from 'react';
import { StaticRouter as Router, matchPath } from 'react-router';
import sourceMapSupport from 'source-map-support';
import fs from 'fs';

// BASE COMPONENTS
// ========================================
import App from '../shared/App';
import render from './render';
// import NotFound from '../shared/components/notFound/notFound';
// import Routes from '../shared/components/routes/routes';

// BASE SETUP
// ========================================
const PORT = process.env.PORT || 3000;
const app = express();
app.use('/robots.txt', express.static('./dist/robots.txt'));
app.use('/sitemap.xml', express.static('./dist/sitemap.xml'));

let cssToInline = {};

fs.readFile('./dist/app.css', 'utf8', (err, data) => {
    if (err) {
        console.log('there was an error');
    } else {
		cssToInline['module'] = data;
    }
})

// ADDITIONAL IMPORTS
// ========================================
// app.use(Helmet());
sourceMapSupport.install();

// ROUTES SETUP
// ========================================
app.use('/dist', express.static('./dist'));

app.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    res.send();
})

app.get('*', (req, res) => {
	// const match = Routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
    // if (match) {

		res.status(200).send(render(
            (
                <Router context={{}} location={req.url}>
                    <App />
                </Router>
            ), cssToInline));
	// } else {
	// 	// res.status(404).send(render(<NotFound />));
	// 	res.status(404).json({Error: "Error Message"})
	// 	return;
	// }
});

// START SERVER
// ========================================
app.listen(PORT);
console.log('server is running on port:', PORT);