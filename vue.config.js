module.exports = {
  devServer: {
    port: 5500
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "前端日常学习资料";
        return args
      })
  }
};
