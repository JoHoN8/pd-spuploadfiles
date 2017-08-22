const path = require('path');
const webpack = require('webpack');
const packageData = require("../package.json");

module.exports = function(env) {
    let plugins = [];
    let output = {
        path: path.resolve(__dirname, "../dist"),
        filename: `${packageData.name}.js`,
        libraryTarget: 'umd',
        library: 'SET THIS' //this will be the global variable to hook into
    };

    if (env === "prod") {
        let UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin();
        let prodTrigger = new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        });
        output.filename = `${packageData.name}.min.js`;
        plugins.push(prodTrigger, UglifyJsPlugin);
    }

    return {
        entry: "./src/library.js",
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
        externals: {
            "file-saver": {
                commonjs: 'file-saver',
                commonjs2: 'file-saver',
                amd: 'file-saver',
                root: 'saveAs'
            }
        },
        //devtool: 'source-map'
    };
}
