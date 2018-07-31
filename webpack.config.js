var path = require('path');


module.exports = {
    entry: path.join(__dirname, 'js', 'app.js'),
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'out.js'
    },
    devServer: {
        contentBase: path.join(__dirname, ''),
        compress: true,
        port: 9000,
    },
    watch: true,
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    mode: 'development'
};