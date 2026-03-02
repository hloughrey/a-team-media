module.exports = {
    siteMetadata: {
        title: `A-Team-Media | Aberdeenshire Wedding & School or Group Videography Consultant`,
        description: `Aberdeenshire videography service specialising in Weddings & School, or Group performances. Our expert Videography will work with you to capture your special event & provide a professionally edited copy in a variety of digital formats. We also provide services to convert old videos & photo slides into modern digital formats.`,
        author: `Hugh Loughrey`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                cssLoaderOptions: {
                    esModule: false,
                    modules: {
                        namedExport: false,
                    },
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `A-Team-Media`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/a-team-media.png`,
            },
        },
    ],
};
