const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry : './src/js/index.js',
    output:{
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.s[ac]ss$/i,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'BeduTravels Demo'
        })
    ]
}