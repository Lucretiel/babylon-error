const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
	entry: './index.jsx',
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
})
