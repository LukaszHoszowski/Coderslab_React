const path = require("path");
const entryPath = "05_Konfiguracja_srodowiska/01_Projekt_testowy";

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
        // contentBase: path.join(__dirname, `${entryPath}`),
        // publicPath: "/build/",
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