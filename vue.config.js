module.exports = {
  publicPath: "/resumeBs/",
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
