import React, { Fragment } from 'react';

import { THeading } from './heading.types';
import styles from './styles.module.scss';

export function Heading({ heading }: THeading) {
    return (
        <Fragment>
            <h1 className={styles.heading}>{heading}</h1>
            <span className={styles.underline}></span>
        </Fragment>
    );
}
