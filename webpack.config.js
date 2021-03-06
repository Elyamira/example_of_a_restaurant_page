const path = require('path');

module.exports = {
	// resolve: {
	// 	fallback: {
	// 		util: require.resolve('util/'),
	// 		path: require.resolve("path-browserify"),
	// 		crypto: require.resolve("crypto-browserify"),
	// 		buffer: require.resolve("buffer/"),
	// 		https: require.resolve("https-browserify"),
	// 		http: require.resolve("stream-http"),
	// 		os: require.resolve("os-browserify/browser"),
	// 		vm: require.resolve("vm-browserify"),
	// 		stream: require.resolve("stream-browserify"),
	// 		constants: require.resolve("constants-browserify"),
	// 		assert: require.resolve("assert/"),
	// 	},
	// },
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
