import React from 'react';

import { Heading } from '../../components';
import styles from './styles.module.scss';

export function PhotosToDigital() {
    return (
        <section id="photo-slide-conversions" className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <i className="fa fa-camera fa-5x" aria-hidden="true"></i>
                    <Heading heading="Photos to Digital" />
                </div>
                <div>
                    <p>
                        Bring your old 35mm slides back to life with our 35mm
                        slide scanning service. 35mm slides were popular in
                        times gone past because of their high quality images,
                        but how many people are able to look at their slides on
                        a projector now?
                    </p>
                    <p>
                        Our 35mm slide scanning service will allow you to view
                        them on any computer, share them on Social Media, print
                        them off and pretty much do whatever you want without
                        the risk of loosing them.
                    </p>
                    <p>
                        We can scan any type of mounted slide including 35mm,
                        110 and negative. If we can not scan them, you will not
                        pay for us checking.
                    </p>
                    <p>
                        We scan your slides individually by hand, so we make
                        sure each slide comes back to you correctly orientated.
                    </p>
                    <p>
                        We charge 30p per slide and offer discounts for larger
                        orders. All your slides are put on to a Disc for safe
                        storage, which is labelled and supplied in a clear CD
                        case free of charge.
                    </p>
                    <p>
                        These images are fully transferrable to your own
                        computer.
                    </p>
                    <p>Give us a call and we can give you a quote.</p>
                </div>
            </div>
        </section>
    );
}
