import React, { Fragment } from 'react';
import PortfolioVideo from '../PortfolioVideo/PortfolioVideo';

import Text from '../../lib/text';
import styles from './styles.scss';

const Portfolio = () => (
    <div className="row">
        <div className={`col-xs-12 ${styles.highlights}`}>
            <PortfolioVideo Video={'https://mediazilla.com/eod6fwuR1'} />
        </div>
        <div className="col-xs-12">
            {Text.Blog.map((post, index) => (
                <PortfolioVideo key={index} {...post} />
            ))}
        </div>
    </div>
);

export default Portfolio;
