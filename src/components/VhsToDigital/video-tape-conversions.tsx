import React from 'react';

import { Heading } from '../../components';
import styles from './styles.module.scss';

export function VhsToDigital() {
    return (
        <section id="video-tape-conversions" className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <i className="fa fa-video fa-5x" aria-hidden="true" />
                    <Heading heading="VHS to Digital" />
                </div>
                <div className={styles.toDigitalWrapper}>
                    <div className={styles.toDigitalIntro}>
                        <p>
                            Looking to retain all your family history &
                            memories?
                        </p>
                        <p>Look no further you’ve come to the right place. </p>
                        <p>
                            Here at A-Team Media, we can rescue your treasured
                            memories from video tape and restore them on to more
                            modern storage such as DVD or MP4 file so you can
                            reminisce and be sure your memories are safe for
                            your families next generation.
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
                            Prices quoted are for the basic service which is the
                            conversion including a DVD menu with chapters where
                            required, a printed label with title of your choice
                            in a clear CD case.
                        </p>
                        <p>
                            Other options for more premium discs and cases are
                            available on request.
                        </p>
                    </div>
                    <div className="row">
                        <div
                            className={`col-xs-12 col-sm-6 ${styles.packageListings} ${styles.featureListing}`}
                        >
                            <h2>DVD</h2>
                            <div className={styles.packageInfo}>
                                <ul>
                                    <li>
                                        One DVD - £15 (up to 3 hours of footage)
                                    </li>
                                    <li>
                                        Each additional DVD - £10
                                        <br />
                                        <br />
                                    </li>
                                    <li>Copy of a DVD - £10</li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className={`col-xs-12 col-sm-6 ${styles.packageListings} ${styles.featureListing}`}
                        >
                            <h2>USB</h2>
                            <div className={styles.packageInfo}>
                                <ul>
                                    <li>
                                        Email link for MP4 download of file -
                                        £10
                                    </li>
                                    <li>
                                        One MP4 file for USB - £10
                                        <br />
                                        <sub>
                                            If you supply your own storage
                                            device it is just £10 per file
                                        </sub>
                                    </li>
                                    <li>
                                        A-Team Media Supplied USB with MP4 - £30
                                        (up to 16GB)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p>
                            USB’s files for video are limited to 4GB in size and
                            as such, longer files may have to be split into
                            differing files. USB storage is by far the best
                            storage for your files though as it can be copied
                            and saved on other formats easily.
                        </p>
                    </div>

                    <div>
                        <p>
                            <span className={styles.subHeading}>
                                Fully Edited projects - Priced per job
                            </span>
                            This service allows the customer to use old tape
                            footage to create a special memory for a gift.
                        </p>
                        <p>
                            Instead of hours of footage, why not compile a 20
                            minute montage or an hour long version with music,
                            photos etc as a lasting memory.{' '}
                        </p>
                        <p>
                            I have created many birthday gifts like this in the
                            past and have been well received.
                        </p>
                        <p>
                            Perhaps you just want something different, get in
                            touch, I’m sure there will be something we can do
                            for you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
