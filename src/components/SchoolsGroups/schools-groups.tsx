import React from 'react';
import { GraduationCap } from 'lucide-react';

import { credentials } from '../../lib/credentials';
import { Heading } from '../../components';

export function SchoolsGroups() {
    return (
        <section id="schools-groups" className="section bg-white">
            <div className="mx-auto max-w-5xl px-4">
                <div className="section-heading">
                    <GraduationCap size={60} className="mx-auto mb-2" />
                    <Heading heading="Schools & Groups" />
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2">
                        <img
                            className="w-full shadow-[2px_4px_5px_#888888] rounded"
                            src={`${credentials.cloudinary}/v1533585752/a-team-media/schools.jpg`}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mt-8 md:mt-0">
                        <p>
                            Are you a school or group* that is having a show or
                            performance?
                        </p>
                        <p>
                            Concerned that it&apos;s too expensive to be
                            professionally filmed?
                        </p>
                        <p>
                            Thinking of using a nominated parent with a
                            &apos;decent&apos; camcorder or iPad to film the
                            show?
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
