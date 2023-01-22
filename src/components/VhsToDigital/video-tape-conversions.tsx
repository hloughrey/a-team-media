import React from 'react';

import { Heading } from '../../components';
import styles from './styles.module.scss';

export function VhsToDigital() {
    return (
        <section id="video-tape-conversions" className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <i className="fa fa-video fa-5x" aria-hidden="true" />
                    <Heading heading="Video to Digital" />
                </div>
                <div className={styles.toDigitalWrapper}>
                    <div className={styles.toDigitalIntro}>
                        <p>
                            Looking to retain all your family history & memories
                            from your old VHS and camcorder tapes?
                        </p>
                        <p>
                            Here at A-Team Media, we can rescue your treasured
                            memories from video tape and restore them on to more
                            modern storage so you can reminisce and be sure your
                            memories are safe for your families next generation.
                        </p>
                        <p>
                            All our conversions have a basic edit to rid your
                            memories of old and unwanted recorded TV content or
                            where the lens cap has been left on or event camera
                            left on in a bag. This is done as standard and will
                            cost you no extra. You will not get that at any
                            other company, I can guarantee that.
                        </p>
                        <p>
                            Prices quoted are for the basic service but often
                            all this is needed.
                        </p>
                        <p>
                            Other options for more premium discs and cases are
                            available on request.
                        </p>
                    </div>
                    <div className="row">
                        <div
                            className={`col-sm-offset-3 col-xs-12 col-sm-6 col-sm-offset-3 ${styles.packageListings} ${styles.featureListing}`}
                        >
                            <h2>MP4 Files</h2>
                            <div className={styles.packageInfo}>
                                <ul>
                                    <li>Tape converted to MP4 - £15</li>
                                    <li>Supplied on a USB - £10**</li>
                                    <li>
                                        Digital link supplied for download - £10
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ul className={styles.subPoints}>
                            <li>
                                *These prices is on top of the conversion price,
                                so 10 files on one USB would be £160 total.
                            </li>
                            <li>
                                **Larger USB media may be required and will be a
                                slight increase in cost.
                            </li>
                        </ul>
                        <p>
                            USB storage is by far the best storage for your
                            files as it can be copied and saved on other formats
                            easily. DVD is now dead technology and is no longer
                            supplied.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
