module.exports = {
  title: "RUN-UI",
  description: " ",
  dest: "./dist",
  port: 9527,
  themeConfig: {
    nav: [
      { text: "组件", link: "/api/" },
      {
        text: "Gitlab",
        link: "http://gitlab.crc.com.cn/run-front-end-team/RUN-UI-X"
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      "/api/": [
        {
          title: "布局",
          children: [
            "layout/grid",
            "layout/navbar"
          ]
        },
        {
          title: "表单",
          children: [
            "form/button",
            "form/radio",
            "form/checkbox"
          ]
        },
        {
          title: "弹出",
          children: [
          ]
        },
        {
          title: "滚动",
          children: [
          ]
        }
      ]
    }
  },
  markdown: {
    anchor: {
      permalink: true
    },
    toc: {
      includeLevel: [1, 2]
    },
    evergreen: true,
    config: md => {
      // 使用更多 markdown-it 插件！
      md.use(require("markdown-it-task-lists"))
        .use(require("markdown-it-imsize"), { autofill: true })
    }
  }
}