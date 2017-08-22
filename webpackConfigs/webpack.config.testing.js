const path = require('path');
const webpack = require('webpack');
const packageData = require("../package.json");

module.exports = function(env) {
    let plugins = [];
    let output = {
        path: path.resolve(__dirname, "../tests"),
        filename: `${packageData.name}_tests.js`,
    };

    return {
        entry: '../tests/project_tests.js',
        output: output,
        module:{
            rules:[
                {  
                    test: /\.js$/,
                    //exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ["es2015", {"modules": false}],
                                "stage-0"
                            ],
                            plugins: []
                        }
                    }
                }
            ]
        },
        plugins: plugins,
        externals: {},
        //devtool: 'source-map'
    };
}
