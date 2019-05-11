const webpack = require('webpack');
const path = require('path');

module.exports = function (env = {}, argv) {
	console.log(env);

	const isProduction = env.production || false,
		mode = isProduction ? 'production' : 'development';
	return {
		name: mode,
		target: 'web',
		mode,
		devtool: isProduction ? 'source-maps' : 'eval',
		entry: {
			OnSvg: './src/index.js'
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: `[name].${mode}.js`,
			library: 'OnSvg',
			libraryTarget: 'umd',
		},
		module: {
			rules: [
				{
					resource: {
						test: /\.jsx?$/,
						include: [path.resolve(__dirname, 'src')],
						exclude: [/node_modules/],
					},
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', { modules: false }],
								'@babel/preset-react'
							],
							plugins: getAllStagePluginsOfBabel(),
						},
					},
				},
				{
					resource: {
						test: /\.(less|css)$/
					},
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: { sourceMap: true }
						},
						{
							loader: 'less-loader',
							options: { sourceMap: true }
						}
					],
				}
			]
		},
		externals: {
			react: 'React',
			'react-dom': 'ReactDOM',
		},
	};
};

/**
 * 获取babel stage0、1、2、3的所有插件
 * @returns {Array} 一个包含`babel-loader`插件配置的数组
 */
function getAllStagePluginsOfBabel() {
	return [
		// Stage 0
		require.resolve('@babel/plugin-proposal-function-bind'),

		// Stage 1
		require.resolve('@babel/plugin-proposal-export-default-from'),
		require.resolve('@babel/plugin-proposal-logical-assignment-operators'),
		[require.resolve('@babel/plugin-proposal-optional-chaining'), { 'loose': false }],
		[require.resolve('@babel/plugin-proposal-pipeline-operator'), { 'proposal': 'minimal' }],
		[require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'), { 'loose': false }],
		require.resolve('@babel/plugin-proposal-do-expressions'),

		// Stage 2
		[require.resolve('@babel/plugin-proposal-decorators'), { 'legacy': true }],
		require.resolve('@babel/plugin-proposal-function-sent'),
		require.resolve('@babel/plugin-proposal-export-namespace-from'),
		require.resolve('@babel/plugin-proposal-numeric-separator'),
		require.resolve('@babel/plugin-proposal-throw-expressions'),

		// Stage 3
		require.resolve('@babel/plugin-syntax-dynamic-import'),
		require.resolve('@babel/plugin-syntax-import-meta'),
		[require.resolve('@babel/plugin-proposal-class-properties'), { 'loose': false }],
		require.resolve('@babel/plugin-proposal-json-strings')
	];
}