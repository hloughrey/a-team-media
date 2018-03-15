'use strict'
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const autoprefixer = require('autoprefixer');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
	target: 'web',
	cache: true,
	entry: {
		app: path.join(srcPath, 'client', 'index.js')
	},
	resolve: {
		extensions: ['*', '.html', '.js', '.jsx', '.json', '.scss', '.css'],
	},
	module: {
		rules: [
			// { enforce: 'pre',
			//   test: /\.jsx$|\.js$/,
			//   loader: 'eslint-loader',
			//   exclude: /node_modules/,
			//   options: {
			//     fix: true,
			//   }
			// },
			{ test: /\.(jpg|png)$/,
				exclude: /node_modules/,
				loader: 'file-loader',
				query: {
					name: 'images/[name].[ext]'
				}
			},
			{ test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				include: path.resolve(srcPath, 'shared/styles'),
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						query: {
							modules: false,
							minimize: false,
							import: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function () {
								return [
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.scss$/,
				include: path.resolve(srcPath, 'shared/components'),
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						query: {
							modules: true,
							localIdentName: '[local]_[hash:base64:5]',
							minimize: false,
							import: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function () {
								return [
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new HtmlWebpackPlugin({
			title: 'A-Team-Media - Development',
			inject: true,
			template: path.join(srcPath, 'client', 'index.html')
		}),
		new DashboardPlugin()
	],
	output: {
		path: distPath,
		filename: 'bundle.js',
	},
	devServer: {
		inline: true,
		port: 8080,
		contentBase: distPath,
		historyApiFallback: true
	}
}
