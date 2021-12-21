const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const mainJS = require.resolve("./resource/index.js")
const outputFolder = 'docs';
const postCSSLoader = {
    loader: "postcss-loader",
    options: { postcssOptions: { plugins: ['autoprefixer'] } }
}
const CSSLoader = [
    {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader", // Translates CSS into CommonJS
            },
            // postCSSLoader,
            {
                loader: "sass-loader", // Compiles Sass to CSS
            },
        ],
    },
];

const config = {
    mode: 'development',
    entry: [mainJS],
    output: {
        path: path.resolve(__dirname, outputFolder),
        filename: 'app.js',
    },
    devtool: "source-map",
    plugins: [new MiniCssExtractPlugin({ filename: 'app.css' })],
    module: { rules: CSSLoader },
    resolve: { symlinks: false },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '.cache'),
    },
}

module.exports = config;
