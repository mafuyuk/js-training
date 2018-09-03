const path = require('path');

module.exports = {
    entry: [
        './src/root.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dest'),
        port: 3000
    },
    performance: { hints: false }
};
