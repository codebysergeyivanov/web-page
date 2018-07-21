const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
       {
         test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
         use: [
                {
             loader: 'file-loader',
             options: {
		     outputPath: 'fonts/', 
             name: '[name].[ext]',
		     publicPath: './' 
            }  
          }
         ]
       },
      {
         test: /\.(png|jpg|gif)$/,
         use: [
           {
             loader: 'file-loader',
             options: {
			 outputPath: 'img/',	 
             name: '[name].[ext]',
			 publicPath: './'	 
            }  
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
	new HtmlWebpackPlugin({  
      template: 'src/index.html'
    }) 
  ]
};
