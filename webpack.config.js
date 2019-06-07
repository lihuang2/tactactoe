//webpack.config.js
module.exports = {
    entry: ['./app/main.js'],
    output: {
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/,
                query: {
                    plugins: ['transform-class-properties']
                }
            }
        ]
    },
    devServer:{
        port:3000
    }
};