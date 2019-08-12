module.exports = {
  siteMetadata: {
    title: 'Gatsby Auth Starter AWS Amplify',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /vectors/,
        },
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145157132-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "https://authenticaysh.netlify.com/",
      },
    },
  ],
}
