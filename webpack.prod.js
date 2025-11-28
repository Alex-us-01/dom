const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        // Исправленный способ настройки
        minify: (css, { filename }) => {
          return Promise.resolve({
            code: css,
            warnings: []
          });
        },
        // Или можно использовать cssnano напрямую
        /*
        minify: [
          [require("cssnano"), {
            preset: "default"
          }]
        ]
        */
      }),
      new TerserPlugin({
        terserOptions: {
          compress: true,
          mangle: true
        }
      })
    ]
  }
});
