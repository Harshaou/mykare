const CracoLessPlugin = require("craco-less");

module.exports = {
  style: {
    postOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { "@primary-color": "#10b981" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
