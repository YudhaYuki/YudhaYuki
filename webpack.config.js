var path = require('path');

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    },

    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                // This tell webpack that we only this bable loader/plugin to be applied to javascript files and nothing else.
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }


}