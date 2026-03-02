/**
 * SEO component using Gatsby Head API
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import React, { ReactElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { TSeo } from './seo.types';

export function Seo({
    description = '',
    lang = 'en',
    title,
}: TSeo): ReactElement {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);

    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = site.siteMetadata?.title;

    return (
        <>
            <html lang={lang} />
            <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta
                name="twitter:creator"
                content={site.siteMetadata?.author || ''}
            />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
        </>
    );
}
