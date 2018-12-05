const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PUBLIC_PATH = '/';

module.exports = {
	entry: {
		main: ['./src/JS/ClientApp.jsx', 'webpack/hot/only-dev-server'],
	},
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist/Scripts'),
		publicPath: PUBLIC_PATH,
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		historyApiFallback: true,
		// hot: true,
	},
	devtool: 'eval-source-maps',
	// devtool: 'source-map', // Production
	optimization: {
		splitChunks: {
			cacheGroups: {
				chunks: 'all',
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './template.html',
			chunks: ['main', 'vendors'],
			hash: true,
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
	},
	// plugins: [new HtmlWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: 'style-loader',
					},

					{
						loader: 'css-loader',
						options: {
							url: false,
							// sourceMap: true,
							// modules: true,
						},
					},

					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							includePaths: [path.resolve(__dirname, 'src/CSS')],
						},
					},
				],
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000, // Convert images < 8kb to base64 strings
							name: 'dist/Images/[hash]-[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
		],
	},
};
