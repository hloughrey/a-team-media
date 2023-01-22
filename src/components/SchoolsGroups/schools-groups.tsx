import React from 'react';

import { credentials } from '../../lib/credentials';
import { Heading } from '../../components';
import styles from './styles.module.scss';

export function SchoolsGroups() {
    return (
        <section id="schools-groups" className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <i
                        className="fa fa-graduation-cap fa-5x"
                        aria-hidden="true"
                    />
                    <Heading heading="Schools & Groups" />
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <img
                            className={styles.img}
                            src={`${credentials.cloudinary}/v1533585752/a-team-media/schools.jpg`}
                        />
                    </div>
                    <div
                        className={`col-xs-12 col-md-6 ${styles.aboutWrapper}`}
                    >
                        <p>
                            Are you a school or group* that is having a show or
                            performance?
                        </p>
                        <p>
                            Concerned that it’s too expensive to be
                            professionally filmed?
                        </p>
                        <p>
                            Thinking of using a nominated parent with a ‘decent’
                            camcorder or iPad to film the show?
                        </p>
                        <p>
                            We offer a fantastic professional service for
                            schools and groups that require their show filmed,
                            edited and produced for on behalf of the school,
                            group or parents. This service can mean that it is
                            completely FREE for the school/group.
                        </p>
                        <p>
                            Obviously DVD is old technology so our projects are
                            delivered either via USB or via digital delivery,
                            this retains the quality but also allows you to make
                            sure a copy is safe from being scratched or lost.
                        </p>
                        <p>
                            Each project is the same level of multi camera
                            filming, editing and professionalism we use for our
                            weddings. That means everyone can enjoy the
                            performance without having to view it through the
                            back of a screen and feel the pressure of getting it
                            wrong.
                        </p>
                        <p>
                            We have filmed for several Aberdeen city and shire
                            Schools and other groups with great success over the
                            years. Our school nativity recordings go down a
                            treat with parents every year and booking up early
                            is recommended to avoid disappointment.
                        </p>
                        <span>* Schools and small groups only.</span>
                        <br />
                        <span>** Premium options are at an extra cost</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
