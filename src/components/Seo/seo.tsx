/**
 * SEO component using Next.js Head API
 */

import React, { ReactElement } from 'react';
import Head from 'next/head';
import { siteMetadata } from '@/lib/metadata';

import { TSeo } from './seo.types';

export function Seo({
    description = '',
    lang = 'en',
    title,
}: TSeo): ReactElement {
    const metaDescription = description || siteMetadata.description;
    const defaultTitle = siteMetadata.title;

    return (
        <Head>
            <html lang={lang} />
            <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={siteMetadata.author} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
        </Head>
    );
}
