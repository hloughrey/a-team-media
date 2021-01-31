import React from 'react';
import {
    About,
    Hero,
    Weddings,
    SchoolsGroups,
    VhsToDigital,
    PhotosToDigital,
    ContactUs,
    Layout,
    Seo,
} from '../components';

export default function HomePage() {
    return (
        <Layout>
            <Seo title="A-Team Media" />
            <div className="row">
                <Hero />
                <About />
                <Weddings />
                <SchoolsGroups />
                <VhsToDigital />
                <PhotosToDigital />
                <ContactUs />
            </div>
        </Layout>
    );
}
