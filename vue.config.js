const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            // 设置 scss 公用变量文件
            stylus: {
                data: `@import '~@assets/style/global.styl';`
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias//重定义项目文件路径别名
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@pages', resolve('src/pages'))
            .set('@libs', resolve('src/libs'))
    }
}
