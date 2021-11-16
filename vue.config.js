module.exports = {
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // headers: {
    //   'X-foo': '112233'
    // },
    hot: true, //热更新替换，更新页面
    port: '8088', // 端口号
    host: 'localhost',//指定要使用的主机IP。默认情况下这是localhost。
    open: true,   //自动启动浏览器
    compress: true, //为所服务的一切启用gzip压缩
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/', // 目标接口的域名
        // secure: true,  // https 的时候 使用该参数
        changeOrigin: true,  // 是否跨域
        pathRewrite: {
          '^/api' : ''  // 重写路径
        }
      }
    }
  }
}