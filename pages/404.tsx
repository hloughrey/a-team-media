import React, { ReactElement } from 'react';

import { Layout, Seo } from '../src/components';

export default function NotFoundPage(): ReactElement {
    return (
        <>
            <Seo title="404: Not found" />
            <Layout>
                <h1>404: Not Found</h1>
                <p>
                    You just hit a route that doesn&#39;t exist... the sadness.
                </p>
            </Layout>
        </>
    );
}
