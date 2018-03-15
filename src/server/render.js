import { renderToString } from 'react-dom/server';
export default (renderMe, cssToInline) => (
    `<!DOCTYPE html>
        <html lang='en'>
            <head>
                <title>A-Team-Media | Aberdeenshire Wedding & School or Group Videography Consultant</title>
                <meta name='description' content='Aberdeenshire videography service specialising in Weddings & School, or Group performances. Our expert Videography will \
                work with you to capture your special event & provide a professionally edited copy in a variety of digital formats. We also provide services to convert old \
                videos & photo slides into modern digital formats.'/>
                <meta name='google-site-verification' content='0Zh7UOGGyQa17H9ee5P2R2g9f5yG5fojYXSJPXKTpwU' />
                <meta name="google-site-verification" content="s1Vzem-oaP_t2b9xlxiB4VXr0N5w-ZecScURXzJtUbg" />
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous'>
                <script src='https://code.jquery.com/jquery-3.3.1.min.js' integrity='sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=' crossorigin='anonymous'></script>
                <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' integrity='sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa' crossorigin='anonymous'></script>
                <script defer src='https://use.fontawesome.com/releases/v5.0.6/js/all.js'></script>
                <style>${cssToInline.module}</style>
            </head>
            <body>
                <div id='root'>${renderToString(renderMe)}</div>
            </body>
        </html>`
);
