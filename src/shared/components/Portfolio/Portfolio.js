import React from 'react';
import PortfolioVideo from '../PortfolioVideo/PortfolioVideo';

import Text from '../../lib/text';

const Portfolio = () => (
	<div className='row'>
		{Text.Blog.map((post, index) => <PortfolioVideo key={index} {...post} /> )}
	</div>
);

export default Portfolio;

