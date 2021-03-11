module.exports = {
    siteMetadata: {
        title: `A-Team-Media | Aberdeenshire Wedding & School or Group Videography Consultant`,
        description: `Aberdeenshire videography service specialising in Weddings & School, or Group performances. Our expert Videography will work with you to capture your special event & provide a professionally edited copy in a variety of digital formats. We also provide services to convert old videos & photo slides into modern digital formats.`,
        author: `Hugh Loughrey`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /images/, // See below to configure properly
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `A-Team-Media`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/a-team-media.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-react-leaflet',
            options: {
                linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
