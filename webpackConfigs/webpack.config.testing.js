module.exports = function(env) {
    const path = require('path'),
        cleanWebpackPlugin = require('clean-webpack-plugin'),
        settings = require('./statics/configSettings.js');

    return {
        entry: './tests/project_tests',
        output: {
            path: path.resolve(__dirname, "../tests"),
            filename: "spServerUpload_tests.js",
        },
        module:{
            rules:[
                {
                    test: /\.js$/,
                    //exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: settings.babelOptions
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.css', '.json']
        },
        plugins: [
            new cleanWebpackPlugin(['spServerUpload_tests.js'], settings.testCleanOptions)
        ],
        devtool: 'inline-source-map',
        externals: {}
    };
};

