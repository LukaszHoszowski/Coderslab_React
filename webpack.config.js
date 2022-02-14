const path = require("path");

module.exports = {
    entry: `./js/app.js`,
    mode: 'development',
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `$build`)
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        },
        hot: true,
        compress: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};