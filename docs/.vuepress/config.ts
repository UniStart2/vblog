import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: "/vuepress/",  // 部署站点的基础路径，默认为"/"
  head: [  // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签
    ['script', {type: 'text/javascript', src: '/font/iconfont.js'}],
    ['link', {rel: 'stylesheet', type: 'text/css', href: '/font/iconfont.css'}],
  ],
  locales: {// 站点多语言配置
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: `learning vue`,
      description: `Notes: vue related learning records`,
    },
    '/zh/': {
      lang: 'zh-CN',
      title: `学习vue`,
      description: `笔记: vue相关学习记录`,
    },
  },
  // 主题配置
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
  }),
  // 跳过打包工具配置
  // bundler: 

  // --------------------- 通用配置项 ----------------------------
  dest: 'docs/.vuepress/dist', // 指定vuepress build的输出目录
  temp: 'docs/.vuepress/.temp', // 指定临时文件目录
  cache: 'docs/.vuepress/.cache', // 指定缓存文件目录
  public: 'docs/.vuepress/public', // 指定静态资源存放目录
  // --------------------- 通用配置项 ----------------------------
})