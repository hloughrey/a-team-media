const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

let isProd = process.env.NODE_ENV === "production";
console.log('your environment is:', process.env.NODE_ENV);

module.exports = {
    target: 'node',
    context: srcPath,
    entry: {
        app: path.join(srcPath, 'server', 'index.js'),
        global: path.join(srcPath, 'shared/styles/vendors/bootstrap/_globals.scss') 
    },
    output: {
        path: distPath,
        filename: '[name].js'
    },
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                include: path.resolve(srcPath, 'shared/styles/vendors'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                camelCase: true,
                                importLoaders: true,
                                localIdentName: '[name]',
                                modules: false,
                                minimize: true,
                                namedExport: true
                            }
                        },
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: path.resolve(srcPath, 'shared/components'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                camelCase: true,
                                importLoaders: true,
                                localIdentName: '[local]_[hash:base64:5]',
                                modules: true,
                                minimize: true,
                                namedExport: true
                            }
                        },
                        'resolve-url-loader',
                        'sass-loader'
                    ]
                })
            },
            {
				test: /\.(gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
        ]
    },
    externals: nodeExternals(),
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new CopyWebpackPlugin([
            { from: `${srcPath}/shared/sitemap.xml`, to: `${distPath}/sitemap.xml` },
            { from: `${srcPath}/shared/robots.txt`, to: `${distPath}/robots.txt` },
        ]),
        new ExtractTextPlugin('[name].css'),
        new webpack.NamedModulesPlugin()
    ]
};