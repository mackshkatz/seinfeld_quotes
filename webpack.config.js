const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const historyApiFallback = require('koa2-connect-history-api-fallback')

const SRC_DIR = path.join(__dirname, './src')
const DIST_DIR = path.join(__dirname, './dist')
const PUBLIC_DIR = path.join(__dirname, './public')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.join(SRC_DIR, 'index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  resolve: { extensions: ['.js', '.json', '.css'] },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader?cacheDirectory=true'
      },
      // {
      //   test: /\.css$/,
      //   exclude: [/node_modules/, /vendors/],
      //   use: [
      //     isLocal ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     'css-loader?modules&camelCase=dashes',
      //     'postcss-loader'
      //   ]
      // },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: { loader: 'url-loader' }
      }
    ]
  },
  plugins: [
  // new MiniCssExtractPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      template: path.join(PUBLIC_DIR, 'index.html'),
      inject: 'body'
    })
    // new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    namedModules: true,
    noEmitOnErrors: true
  },
  serve: {
    port: 3000,
    host: 'localhost',
    content: path.resolve(__dirname, 'public'),
    add: (app => app.use(historyApiFallback()))
  }
}
