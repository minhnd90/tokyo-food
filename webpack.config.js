const path = require('path')

const mainJS = require.resolve("./resource/index.js")
const loaders = [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    {
        loader: "css-loader",
        options: {
            sourceMap: true
        },
    },
    // Compiles Sass to CSS
    {
        loader: "sass-loader",
        options: {
            sourceMap: true
        },
    },
]

const config = {
    mode: 'development',
    entry: [mainJS],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: loaders
            },
        ],
    },
}

module.exports = config;
