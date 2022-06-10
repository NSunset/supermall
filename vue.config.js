const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      //配置路径别名,@默认注册的别名路径是/src
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        router: "@/router",
        views: "@/views",
      },
    },
  },
});
