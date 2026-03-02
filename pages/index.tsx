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
} from '../src/components';

export default function HomePage() {
    return (
        <>
            <Seo title="A-Team Media" />
            <Layout>
                <Hero />
                <About />
                <Weddings />
                <SchoolsGroups />
                <VhsToDigital />
                <PhotosToDigital />
                <ContactUs />
            </Layout>
        </>
    );
}
