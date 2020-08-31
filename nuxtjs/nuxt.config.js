export default {
  mode: "universal",
  target: "server",
  head: {
    title: "土豆博客",
    htmlAttrs: {
      lang: "zh-Hans"
    },
    meta: [
      { charset: "utf-8" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "renderer", content: "webkit" },
      { name: "keywords", content: "土豆博客，个人博客，博客，前端博客" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "referrer", content: "no-referrer" },
      { name: "author", content: "土豆土豆" },
      {
        hid: "description",
        name: "description",
        content:
          "土豆博客专注解决前端开发中遇到的难题以及分享经验技巧，爱生活，爱学习，期待与你一同前行。"
      }
    ]
  },
  loading: {
    color: "#ffc402"
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ["@nuxtjs/vuetify"],
  modules: ["@nuxtjs/axios"],
  axios: {},
  router: { middleware: "redirect" },
  vuetify: {
    theme: {
      dark: true
    }
  }
};
