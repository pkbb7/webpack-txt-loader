const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: ['b-loader.js', 'a-loader.js']
            }
        ]
    },
    resolveLoader: {
        modules: ['./src/loaders/']
    }
};