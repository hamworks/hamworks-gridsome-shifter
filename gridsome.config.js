module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',

  templates: {
    //WordPressPost: '/:year/:month/:day/:id', //adds route for "post" post type (Optional)
    WordPressPage: [
      {
        path: (node) => {
          const url = new URL(node.link);
          return `${url.pathname}`
        }
      }
    ]
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: process.env.CONTAINER_URL,
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ]
}
