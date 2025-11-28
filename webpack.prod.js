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
        // Настройки для CssMinimizer
        minify: [
          // Можно добавить дополнительные опции минификации
          ["cssnano", { preset: "default" }]
        ]
      }),
      new TerserPlugin({
        // Настройки для минификации JavaScript
        terserOptions: {
          compress: true,
          mangle: true
        }
      })
    ]
  }
});
