import React from 'react';

import {
    About,
    Hero,
    Weddings,
    ContactUs,
    SchoolsGroups,
    PhotosToDigital,
    VhsToDigital,
} from '../../components';

const HomePage = () => (
    <div className="row">
        <Hero />
        <About />
        <Weddings />
        <SchoolsGroups />
        <VhsToDigital />
        <PhotosToDigital />
        <ContactUs />
    </div>
);

export default HomePage;
