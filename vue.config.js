
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 返回绝对路径
function resolve (dir) {
  return path.join(__dirname, dir)
}
const Timestamp  = new Date().getTime()
// vue.config.js
module.exports = {
  // 部署应用包时的基本 URL
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 37.5, // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]
      }
    }
  },
  chainWebpack (config) {
    // 设置路径别名
    config.resolve.alias
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@config', resolve('src/config'))
      .set('@utils', resolve('src/utils'))
      .set('@views', resolve('src/views'))
    // 修改打包后img文件名
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => {
        return {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: `[name].${process.env.VUE_APP_Version}.${Timestamp}.[ext]`
            }
          }
        };
      })
    // 设置压缩后缀
    // config.output.filename(`[name].[hash].${Version}.js`).end()
  },
  // 修改打包后js文件名
  configureWebpack: { // webpack 配置
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
      filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
    } // CSS 相关选项
  },
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {},

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  }
}
