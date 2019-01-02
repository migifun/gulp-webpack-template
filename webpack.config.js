module.exports =
{
    mode: "production",
    entry: "./src/babel/main.es6",
    output:
    {
        filename: "main.js"
    },
    module:
    {
        rules: [ {
                test: /\.es6$/,
                use: [ {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'source-map'
}