const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    loaders:{
        htmlLoader:{
            test: /\.html&/,
            use:{
                loader: 'html-loader',
                options: {}
            }
        }
    },
    plugins: {
        cleanDistFolderAndIndexfile: new CleanWebpackPlugin(["dist/*"])
    }
}