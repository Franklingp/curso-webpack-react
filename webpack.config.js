const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const DotEnv = require("dotenv-webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js",
        clean: true,
    },
    resolve: {
        extensions: [".js", "jsx"],
        alias: {
            "@images": path.resolve(__dirname, "src/assets/images/"),
            "@utils": path.resolve(__dirname, "src/utils/"),
            "@styles": path.resolve(__dirname, "src/styles/"),
        }
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: "html-loader" }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "assets/fonts/[name].[hash].[ext]"
                },
            },
            {
                test: /\.png/,
                generator: {
                    filename: "assets/images/[name].[hash].[ext]"
                },
                type: 'asset/resource'
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash].css",
        }),
        new CleanWebpackPlugin(),
        new DotEnv(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin(),
            new CssMinimizerWebpackPlugin()
        ]
    }
}