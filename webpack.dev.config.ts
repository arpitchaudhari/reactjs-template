import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

const config: Configuration = {
  /**
   * mode tells webpack whether app needs to be bundled for production or development.
   * Currently its configued for development. Webpack will automatically set
   * process.env.NODE_ENV to "development" which means we get React development tools
   * included in bundle.
   */
  mode: "development",
  /**
   * output.public tells webpack what root path is in the app. This is important for
   * deep linking in the dev server to work properly.
   */
  output: {
    publicPath: "/",
  },
  /**
   * entry tells webpack where to start looking for modules to bundle.
   * In project, this is index.tsx
   */
  entry: "./src/index.tsx",
  /**
   * module tells webpack how different modules will be treated.
   * This project is telling webpack to use babel-loader plugin to process
   * files with .js, .ts, and .tsx extensions.
   */
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  /**
   * resolve.extensions tells webpack what file types to look for in which order
   * during module resolution. We need to tell it to look for Typescript files
   * as well as Javascript files.
   */
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    /**
     * HtmlWebpackPlugin creates HTMl file.
     * We have told this to use index.html in the src folder as the template.
     */
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    /**
     * HotModuleReplacementPlugin and devServer.hot allows modules to be updated
     * while an application is running, without a full reload.
     */
    new HotModuleReplacementPlugin(),
    /**
     * This enables webpack process to type check the code. This means that
     * Webpack will inform us of any type errors.
     *
     * We have used async flag to tell webpack to wait for type checking process
     * to finish before it emits any code.
     */
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    /**
     * ESLintPlugin enable webpack process to lint the code with eslint.
     * We have used extensions setting to tell the plugin to lint Typescript
     * files as well as Javascript files.
     */
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
  /**
   * devtools tells webpack to use full inline source maps.
   * This allows us to debug the original code before transpilation.
   */
  devtool: "inline-source-map",
  /**
   * devServer configures webpack development server.
   * We tell webpack that the root of the webserver is the build folder,
   * and to serve files on port 4000.
   *
   * historyApiFallback is necessary for deep links to work in multi-page apps.
   *
   * We are also telling webpack to open the browser after the server has been started.
   */
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
};

export default config;
