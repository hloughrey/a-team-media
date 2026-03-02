import React from 'react';

import { Heading } from '../../components';
import styles from './styles.module.scss';

export function ContactUs() {
    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <i className="fa fa-envelope fa-5x" aria-hidden="true" />
                    <Heading heading="Get In Touch With Us" />
                </div>
                <div className="row">
                    <div className="col-xs-offset-3 col-xs-12 col-xs-offset-3">
                        <p>
                            If you have any queries please get in touch{' '}
                            <a href="tel:07789 620335">07789 620335</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
