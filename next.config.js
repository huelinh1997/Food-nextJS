// const path = require('path')
// const withImages = require("next-images");
// const withSass = require("@zeit/next-sass");

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   output: {
//     filename: 'my-first-webpack.bundle.js',
//   },
//   module: {
//     rules: [{ test: /\.txt$/, use: 'raw-loader' }],
//   },
//   // images: {
//   //   loader: 'imgix',
//   //   path: 'https://example.com/myaccount/',
//   // },
// }

// // module.exports = withImages(
// //   withSass({
// //     cssModules: true,
// //   })
// // );

const path = require('path');
// const nextBuildId = require('next-build-id');

module.exports = () => {
  const localeSubpaths = {};

  const sassOptions = {
    includePaths: [path.join(__dirname, 'styles')],
  };

  const devIndicators = {
    autoPrerender: false,
  };

  const publicRuntimeConfig = {
    localeSubpaths,
  };

  const serverRuntimeConfig = {
    // Will only be available on the server side
    SENTRY_DSN: process.env.SENTRY_DSN, // Pass through env variables
  };

  const webpack = (cfg, opts) => {
    if (!opts.isServer) {
      cfg.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    const originalEntry = cfg.entry;
    cfg.entry = async () => {
      const entries = await originalEntry();
      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift('./client/polyfills.js');
      }
      return entries;
    };

    cfg.module.rules.push({
      // test: /\.(png|woff|woff2|eot|ttf|gif|jpg|ico|svg)$/,
      // loader: 'file-loader',
      // options: {
      //   name: '[name]_[hash].[ext]',
      //   publicPath: `/_next/static/files`,
      //   outputPath: 'static/files',
      // },
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name]_[hash].[ext]',
        publicPath: `/_next/static/files`,
        outputPath: 'static/files',
      },
    });

    return cfg;
  };

  // const generateBuildId = () =>
  //   process.env.BUILD_ID
  //     ? process.env.BUILD_ID
  //     : nextBuildId({ dir: __dirname, describe: true });

  // const env = {
  //   APP_NAME: (() => process.env.APP_NAME)(),
  //   APP_ENV: (() => process.env.APP_ENV)(),
  //   APP_MODE: (() => process.env.APP_MODE)(),
  //   ROOT_URL: (() => process.env.ROOT_URL)(),
  //   API_URL: (() => process.env.API_URL)(),
  //   COOKIE_USER_NAME: (() => process.env.COOKIE_USER_NAME)(),
  //   HEADER_X_MOBILE_DEVICE_TYPE: (() =>
  //     process.env.HEADER_X_MOBILE_DEVICE_TYPE)(),
  //   CHECK_APP_VERSION_INTERVAL: (() =>
  //     process.env.CHECK_APP_VERSION_INTERVAL)(),
  //   BUILD_ID: (() => process.env.BUILD_ID)(),
  //   APP_ID: (() => process.env.APP_ID)(),
  //   APP_SECRET: (() => process.env.APP_SECRET)(),
  //   DASHBOARD_API_URL: (() => process.env.DASHBOARD_API_URL)(),
  //   APP_PREVIEW_DOMAIN: (() => process.env.APP_PREVIEW_DOMAIN)(),
  //   APP_PREVIEW_DM_DOMAIN: (() => process.env.APP_PREVIEW_DM_DOMAIN)(),
  //   DATADOG_APPLICATION_ID: (() => process.env.DATADOG_APPLICATION_ID)(),
  //   DATADOG_CLIENT_TOKEN: (() => process.env.DATADOG_CLIENT_TOKEN)(),
  // };

  return {
    publicRuntimeConfig,
    serverRuntimeConfig,
    sassOptions,
    devIndicators,
    webpack,
    // generateBuildId,
    // env,
  };
};
