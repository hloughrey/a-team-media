import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <body>
                {/* Netlify Forms detection */}
                <form
                    name="contact"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    hidden
                >
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <input type="tel" name="telephone" />
                    <input type="text" name="subject" />
                    <textarea name="message"></textarea>
                </form>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
