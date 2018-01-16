const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


let sassBuilder = new ExtractTextPlugin({
    filename: "style.bundle.[hash:9].css",
    allChunks: true
});

module.exports = {
    loaders: {
        htmlLoader: {
            test: /\.html$/,
            exclude: /layout.html/,
            use: [
                {
                    loader: 'nested-html-loader',
                    options: {
                        attrs: ["img:src", "link:href"],
                        interpolate: true,
                    }
                }],
        },
        sassLoader: {
            test: /\.scss$/,
            loader: sassBuilder.extract([
                "css-loader",
                "sass-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        plugins: () => ([
                            require("autoprefixer")()
                        ])
                    }
                }])
        },
        svgLoader: {
            test: /\.svg/,
            use: {
                loader: 'svg-inline-loader',
                options: {
                    removeTags: true,
                    removingTags: ['title', 'desc'],
                    removingTagAttrs: ['id', 'data-name']

                }
            }
        },

    },
    plugins: {
        cleanDistFolderAndIndexfile: new CleanWebpackPlugin(["dist/*"]),
        buildHtmlIndex: new HtmlWebpackPlugin({
            template: "./src/layout.html",
            filename:'index.html'
        }),
        buildHtmlAbout: new HtmlWebpackPlugin({
            template: "./src/layout.html",
            filename:'about/index.html'
        }),
        buildHtmlConcat: new HtmlWebpackPlugin({
            template: "./src/layout.html",
            filename:'contact/index.html'
        }),
        sassBuilder: sassBuilder
    }
}
