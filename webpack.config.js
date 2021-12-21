const path = require('path')

const mainJS = require.resolve("./resource/index.js")
const mainHTML = require.resolve("./public/index.html")

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
                use: [
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
                ],
            },
        ],
    },
}

module.exports = config;
