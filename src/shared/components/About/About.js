import React from 'react';
import CSSModules from 'react-css-modules';
import Heading from '../Heading/Heading';
import { cloudinary } from '../../lib/credentials';
import styles from './styles.scss';

const About = () => (
    <section id="about" className={styles.section}>
        <div className="container">
            <div className={styles.heading}>
                <i className="fa fa-book fa-5x" aria-hidden="true" />
                <Heading
                    heading="About"
                    subHeading="Excepteur mollit nulla Lorem ipsum occaecat."
                    color={'red'}
                />
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <img
                        className={styles.img}
                        src={`${cloudinary}/v1533585548/a-team-media/aboutUs.jpg`}
                    />
                </div>
                <div className={`col-xs-12 col-md-6 ${styles.aboutWrapper}`}>
                    <p>
                        My business was established in 2013 under the brand
                        names ‘Aberdeenshire Video Editing’ and ‘AVE Wedding
                        Films’ and our services remain the same today under the
                        new name ‘A-Team Media’.
                    </p>
                    <p>
                        Why A-Team Media? My family consists of myself (Andy),
                        my wife Arlene, and my twin children Aidan and Addison,
                        so all A’s and hence the A-Team, it makes total sense to
                        me, a fan of 80’s TV shows.
                    </p>
                    <p>
                        My family and I love all things Disney and lots of fun,
                        fun is a big thing with us all, life should be fun and I
                        strive to ensure that all aspects of my work is
                        likewise.
                    </p>
                    <p>
                        Whilst the majority of the work in the business is
                        carried out by myself, I have some assistants too, my
                        dad (Allan) assists with the filming of weddings and
                        other events and acts as my gofer the majority of the
                        time and my mum (Irene) is fully trained to convert 35mm
                        sides to digital.
                    </p>
                    <p>
                        Our services, no matter which you choose, remain very
                        personal unlike dealing with large businesses that offer
                        similar.
                    </p>
                    <p>
                        We strive to ensure you get the best service possible,
                        along with the best product we can supply with fantastic
                        value for money.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default CSSModules(About, styles);
