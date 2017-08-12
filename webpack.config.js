const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

let isProduction;
if (process.env.NODE_ENV === 'production') {
  isProduction = './js/index.js'
} else {
  isProduction = ['babel-polyfill', 'react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:1234', 'webpack/hot/only-dev-server', './js/index.js']
}

module.exports = {
  entry: isProduction,
  output: {
    filename: 'app.bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: path.resolve(__dirname, 'src'),
  devtool: '#eval-source-map',
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => {
                return [require('precss'), require('autoprefixer'), require('postcss-size')];
              }
            }
          }
        ]
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new DashboardPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      },
      comments: false
    }),
    new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),
    new HtmlWebpackPlugin({
      title: 'kobo/PC adult',
      template: path.join(__dirname, './src/index.ejs')
    })
  ])
}

if (process.env.NODE_ENV === 'development') {
  module.exports.devtool = '#source-map'
  module.exports.devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    open: true,
    port: 1234,
    hot: true,
    inline: true
  };
  module.exports.plugins = (module.exports.plugins || []).concat([
    new DashboardPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ])
}
