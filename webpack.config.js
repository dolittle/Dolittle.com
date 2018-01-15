const path = require('path');
const configParts = require("./webpack.parts");


module.exports = {
    entry: ['./src/scripts/index.js', './src/index.html'],
    output: {
        filename: 'bundle.[hash:9].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                },
                {
                    loader: 'extract-loader'
                },
                {
                    loader: 'html-loader',
                    options: {
                        attrs: ["img:src", "link:href"],
                        interpolate: true,
                    }
                }],
        }]
    },
    plugins: [
        configParts.plugins.cleanDistFolderAndIndexfile
    ]
};
