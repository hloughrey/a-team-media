import React from 'react';

import styles from './styles.module.scss';

export function Portfolio() {
    return (
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
}
