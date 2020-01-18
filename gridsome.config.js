const postcssPresetEnv = require( 'postcss-preset-env' );
const postcssPlugins = [
  postcssPresetEnv( {
    stage: 3,
    features: {
      'nesting-rules': true,
      'custom-media-queries': true,
    },
    autoprefixer: {
      grid: true,
    },
  } ),
];

const context = process.env.CONTEXT || 'develop';

const plugins = [
  {
    use: '@gridsome/source-wordpress',
    options: {
      baseUrl: process.env.CONTAINER_URL,
      typeName: 'WordPress', // GraphQL schema name (Optional)
    }
  },
];

if ( context === 'production' ) {
  plugins.push(
      {
        use: '@gridsome/plugin-google-analytics',
        options: {
          id: 'UA-XXXXXXXXX-X'
        }
      }
  )
}

module.exports = {
  siteName: 'HAMWORKS',
  siteDescription: '札幌のウェブサイト制作・ホームページ制作会社の株式会社 HAMWORKS（ハムワークス）',

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
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  plugins: plugins
}
