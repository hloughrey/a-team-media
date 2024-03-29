import React from 'react';

import { Heading } from '../../components';
import { credentials } from '../../lib';
import styles from './styles.module.scss';

export function About() {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <i className="fa fa-book fa-5x" aria-hidden="true" />
                    <Heading heading="About" />
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <img
                            className={styles.img}
                            src={`${credentials.cloudinary}/v1533585548/a-team-media/aboutUs.jpg`}
                        />
                    </div>
                    <div
                        className={`col-xs-12 col-md-6 ${styles.aboutWrapper}`}
                    >
                        <p>
                            I am an award winning Videographer based in
                            Oldmeldrum, Aberdeenshire Scotland.
                        </p>
                        <p>
                            My business was established in 2013 under the brand
                            names ‘Aberdeenshire Video Editing’ and ‘AVE Wedding
                            Films’ and our services remain the same today under
                            the new name ‘A-Team Media’.
                        </p>
                        <p>
                            Why A-Team Media? My family consists of myself
                            (Andy), my wife Arlene, and my twin children Aidan
                            and Addison, so all A’s and hence the A-Team, it
                            makes total sense to me, a fan of 80’s TV shows.
                        </p>
                        <p>
                            My family and I love all things Disney and lots of
                            fun, fun is a big thing with us all, life should be
                            fun and I strive to ensure that all aspects of my
                            work is likewise.
                        </p>
                        <p>
                            Whilst the majority of the work in the business is
                            carried out by myself, I have some assistants who I
                            bring in to assist with the filming of weddings and
                            other events. I enjoy using media and film students
                            to give the real world experience which helps them
                            and the business.
                        </p>
                        <p>
                            Our services, no matter which you choose, remain
                            very personal unlike dealing with large businesses
                            that offer similar.
                        </p>
                        <p>
                            We strive to ensure you get the best service
                            possible, along with the best product we can supply
                            with fantastic value for money.
                        </p>
                        <p>
                            We have been very fortunate to have been selected as
                            a finalist for many awards over the past few years
                            and were the proud winners of the Prestige Awards
                            Scotland Videographer of the year for 2021/22
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
