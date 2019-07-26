import React, { Fragment } from 'react';
import PortfolioVideo from '../PortfolioVideo/PortfolioVideo';

import Text from '../../lib/text';
import styles from './styles.scss';

const Portfolio = () => (
    <div className="row">
        <div className={`col-xs-12 ${styles.highlights}`}>
            <p>
                Our full{' '}
                <a
                    href="https://vimeo.com/ateammedia9761"
                    target="blank"
                    title="View our portfolio of work on Vimeo"
                >
                    Portfolio
                </a>{' '}
                of work can be found on Vimeo.
            </p>
        </div>
    </div>
);

export default Portfolio;
