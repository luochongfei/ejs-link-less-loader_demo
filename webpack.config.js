const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/build.js?[chunkhash:8]'
    },
    module:{
        rules:[
            {
                test:/\.ejs$/,
                exclude:path.resolve(__dirname,'./node_modules'),
                use:'ejs-link-less-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/template.ejs',
            inject:true,
        })
    ]
}