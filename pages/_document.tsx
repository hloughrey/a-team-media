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
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                    crossOrigin="anonymous"
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
                {/* External scripts */}
                <script
                    src="https://code.jquery.com/jquery-3.3.1.min.js"
                    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                    crossOrigin="anonymous"
                ></script>
                <script
                    src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
                    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
                    crossOrigin="anonymous"
                ></script>
                <script
                    defer
                    src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"
                    integrity="sha384-0AJY8UERsBUKdWcyF3o2kisLKeIo6G4Tbd8Y6fbyw6qYmn4WBuqcvxokp8m2UzSD"
                    crossOrigin="anonymous"
                ></script>
            </body>
        </Html>
    );
}
