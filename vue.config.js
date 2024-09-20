const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 5500,
  },
  // 插件选项...
  chainWebpack: (config) => {
    // 移除 preload 和 prefetch 插件
    config.plugins.delete("prefetch-module");
    // 对 entry 点添加混淆名
    config.output
      .filename("js/[name].[contenthash:8].js")
      .chunkFilename("js/[name].[contenthash:8].chunk.js");

    config.plugin("html").tap((args) => {
      args[0].title = "前端日常学习资料";
      return args;
    });
  },
});
