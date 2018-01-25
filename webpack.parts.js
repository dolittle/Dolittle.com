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
            use:
                {
                    loader: 'html-loader',
                    options: {
                        attrs: ["img:src", "link:href"],
                        interpolate: true
                    }
                }
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
        imageLoader: {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: "[name]-[hash].[ext]",
                    outputPath: "images/"
                }
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 80
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: '65-90',
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                        quality: 75
                    }
                }
            }
            ]
        }
    },
    plugins: {
        cleanDistFolderAndIndexfile: new CleanWebpackPlugin(["dist/*"]),
        buildHtmlIndex: new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html'
        }),
        sassBuilder: sassBuilder
    }
}
