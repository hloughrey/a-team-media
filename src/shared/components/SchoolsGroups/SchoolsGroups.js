import React from 'react';
import CSSModules from 'react-css-modules';
import { cloudinary } from '../../lib/credentials';
import Heading from '../Heading/Heading';

import styles from './styles.scss';

const SchoolsGroups = () => (
    <section id="schools-groups" className={styles.section}>
        <div className="container">
            <div className={styles.heading}>
                <i className="fa fa-graduation-cap fa-5x" aria-hidden="true" />
                <Heading heading="Schools & Groups" />
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <img
                        className={styles.img}
                        src={`${cloudinary}/v1533585752/a-team-media/schools.jpg`}
                    />
                </div>
                <div className={`col-xs-12 col-md-6 ${styles.aboutWrapper}`}>
                    <p>
                        Are you a school or group* that is having a show or
                        performance?
                    </p>
                    <p>
                        Concerned that it’s too expensive to be professionally
                        filmed?
                    </p>
                    <p>
                        Thinking of using a nominated parent with a ‘decent’
                        camcorder or iPad to film the show and produce DVDs for
                        everyone?
                    </p>
                    <p>
                        We offer a fantastic service for schools and groups that
                        require their show filmed, edited and produced for DVD,
                        Blu-ray, MP4 file or even online sharing**. This service
                        can mean that it is completely FREE for the
                        school/group.
                    </p>
                    <p>
                        We have a minimum order of 30 standard DVD’s per show,
                        but each DVD is only £7 and comes designed and labelled
                        with the same level of multi camera filming, editing and
                        professionalism we use for our weddings. That means
                        everyone can enjoy the performance without having to
                        view it through the back of a screen and feel the
                        pressure of getting it wrong.
                    </p>
                    <p>
                        We have filmed for several Aberdeenshire Schools and
                        other groups with great success. Our school nativity
                        recordings go down a treat with parents every year and
                        booking up early is recommended to avoid disappointment.
                    </p>
                    <span>
                        *Schools and small groups only. Performing arts groups
                        are not included.
                    </span>
                    <br />
                    <span>**Premium options are at an extra cost</span>
                </div>
            </div>
        </div>
    </section>
);

export default CSSModules(SchoolsGroups, styles);
