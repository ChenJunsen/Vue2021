const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    pages: {
        pageA: {
            entry: 'src/pages/pageA/index.js',
            template: 'src/layout/template.html',//这里的template不是必须配置的，如果不配置，或者找不到模板html就加载public路径下的index.html
            filename: 'pageA.html',
        },
        pageC: {
            entry: 'src/pages/pageC/index.js',
            template: 'src/layout/template.html',//这里的template不是必须配置的，如果不配置，或者找不到模板html就加载public路径下的index.html
            filename: 'pageC.html',
        }
    },
    chainWebpack: config => {
        config.resolve.alias//重定义项目文件路径别名
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@pages', resolve('src/pages'))
            .set('@libs', resolve('src/libs'))
    },
    devServer: {
        open: true,
        index: '/pageA.html',
        proxy: 'http://localhost:8090/'
    }
}
