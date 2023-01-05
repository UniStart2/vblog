/** VuePress 站点的基本配置文件 */
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: '/vuepress/',  // 部署站点的基础路径，默认为"/"
  head: [  // 在 <head> 标签内加入的额外标签
    ['link', {rel: 'icon', type: 'image/png', size: '32x32', href: '/images/icons/favicon.png'}, ],
    ['meta', {charset: 'utf-8'}],
    ['meta', {name: 'application-name', content: "unistart's blog" }],
    ['meta', {name: 'author', content: 'unistart'}],
    ['meta', {name: 'keywords', content: 'unistart,unistart2,vue,vue2,vu3,study'}],
  ],
  locales: {// 站点多语言配置
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: `UniStart's Vue Study Blog`,
      description: `Notes: Vue related learning records`,
    },
    '/zh/': {
      lang: 'zh-CN',
      title: `UniStart's Vue 学习博客`,
      description: `笔记: Vue相关学习记录`,
    },
  },
  theme: defaultTheme({ // 默认主题配置
    logo: '/logo.png',
    repo: 'UniStart2/vuepress',
    editLink: false,
    editLinkPattern: ':repo/edit/:branch/:path',
    docsRepo: 'https://github.com/UniStart2/vuepress',
    docsBranch: 'main',
    docsDir: 'docs',
    locales: {
      '/': {
        home: '/index.md',
        navbar: [],
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        editLinkText: 'Edit this page',
      },
      '/zh/': {
        home: '/zh/index.md',
        navbar: [
          {
            text: '关于',
            link: '/zh/about/about.md'
          },
          { 
            text: '友链', 
            link: '/zh/friends/friends.md'
          }, 
          {
            text: '外部链接',
            children: [
              {
                text: '工具类网站',
                children: [
                  {
                    text: 'Grabient',
                    link: 'https://www.grabient.com/',
                  },
                  {
                    text: 'JSON Crack',
                    link: 'https://jsoncrack.com/',
                  },
                  {
                    'text': 'Nginx Config',
                    link: 'https://www.digitalocean.com/community/tools/nginx',
                  },
                  {
                    text: 'LaTex在线编辑器',
                    link: 'https://www.latexlive.com/',
                  }, 
                  {
                    text: 'Regex Learn',
                    link: 'https://regexlearn.com/zh-cn',
                  },
                  {
                    text: 'Regex101',
                    link: 'https://regex101.com/',
                  }
                ]
              },
            ]
          }
        ],
        selectLanguageText: '选择语言',
        selectLanguageName: '简体中文',
        editLinkText: '编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
          '似乎来到了一个异次元空间',
          '页面似乎被未知力量吞噬',
          '你似乎来到了没有知识存在的荒原',
          '你要的东西不在这, 到别处看看吧',
          '非常抱歉，你要找的页面不见了',
          '抱歉，此页面不存在',
          '唔...该页面不存在',
          '页面不见啦',
          '很抱歉，无法访问此页面',
        ], // 404页面提示信息，当用户进入404页面时随机选取一条信息展示
        backToHome: '返回首页', 
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
    },
    themePlugins: { // 主题使用的插件配置

    },
  }),
  // 打包工具配置
  // bundler: 

  // --------------------- 通用配置项 ----------------------------
  dest: 'docs/.vuepress/dist', // 指定vuepress build的输出目录
  temp: 'docs/.vuepress/.temp', // 指定临时文件目录
  cache: 'docs/.vuepress/.cache', // 指定缓存文件目录
  public: 'docs/.vuepress/public', // 指定静态资源存放目录
  //是否启用 Debug 模式
  debug: false,
  //指定页面文件的Patterns,这些Patterns是相对于Source目录的
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'], 
  //指定为页面生成永久链接的Pattern, 它会被每个页面的 Frontmatter 中的 permalinkPattern 字段覆盖 
  // permalinkPattern: ':slug.html', //注意: 永久链接配置项会影响页面的路由
  // --------------------- 通用配置项 ----------------------------

  // --------------------- Dev 配置项 ---------------------------
  host: '0.0.0.0', // 指定开发服务器的主机名
  port: 8080, // 指定开发服务器的端口号
  open: true, // 是否在开发服务器启动后打开浏览器
  /** 
   * templateDev: 指定开发时使用的 HTML 模版
   * 默认值：'@vuepress/client/templates/dev.html'
   */
  // templateDev: '', 
  // --------------------- Dev 配置项 ---------------------------

  //--------------------- Build 配置项 --------------------------
  /** 
   * shouldPreload: 设置那些文件需要预加载
   * 默认值：true
   * 
   * 值可以是一个函数，用来控制那些文件是需要生成对应的<link rel="preload">标签,
   * 也可设置为true或false可以完全启用或禁用它。
   * 默认情况下，只有当前页面所需文件会被预加载。
   */
  shouldPreload: true,
  /**
   * shouldPrefetch: 设置那些文件需要预拉取
   * 默认值：true
   * 
   * 值可以是一个函数，用来控制那些文件是需要生成对应的<link rel="prefetch">标签，
   * 也可设置为true或false可以完全启用或禁用它。
   * 如果设置为true，所有其他页面所需文件都会被预拉取。对于小型网站来说这有助于提升页面切换
   * 速度，但网站页面过多时不建议使用。
   */
  shouldPrefetch: true,
  /**
   * templateBuild: 指定构建时使用的 HTML 模版
   * 默认值：'@vuepress/client/templates/build.html'
   */
  // templateBuild: '',
  //--------------------- Build 配置项 --------------------------

  //-------------------- Markdown 配置项 ------------------------
  /**
   * markdown: 对VuePress内置的Markdown语法进行扩展配置，
   * 可以接受markdown-it的所有配置项
   * 
   * 类型：MarkdownOptions
   * 默认值：{}
   */
  markdown: {
    
  },
  //-------------------- Markdown 配置项 ------------------------

  //----------------------- 插件配置 -----------------------------
  plugins: [

  ],
  //----------------------- 插件配置 -----------------------------
})