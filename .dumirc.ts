import { defineConfig } from 'dumi';
import * as process from 'process';

// 仓库地址
const gitPath = '/react-ui/';

// const baseUrl = process.env.NODE_ENV === 'production' ? gitPath : '/';

// base改为/, 因为github上pages上使用了个人自定义域名
const baseUrl = '/';

const footerHtml = `
    <footer>
        <p style="margin: 10px auto;">Copyright © 2019 HzlzH. All Rights Reserved</p>
        <p style="margin: 10px auto;"><a style="color: #8a9099; text-decoration: none;" href="https://beian.miit.gov.cn/#/Integrated/index">蜀ICP备19018626号-1</a></p>
        <p style="margin: 10px auto;"><a style="color: #8a9099; text-decoration: none;" href="https://beian.mps.gov.cn/#/query/webSearch">川公网安备 51019002002328号</a></p>
    </footer>`;

export default defineConfig({
  outputPath: 'docs',
  base: baseUrl,
  title: '前端OR钱端',
  publicPath: `${baseUrl}`,
  resolve: {
    docDirs: ['dumDocs']
  },
  themeConfig: {
    name: '前端OR钱端',
    nav: [
      { title: '介绍', link: '/' },
      { title: '组件', link: '/components/button' },
    ],
    sidebar: {
      '/components': [
        {
          title: '组件',
          children: [
            { title: "Button按钮", link: '/components/button'},
            { title: 'VirtualList虚拟列表', link: '/components/virtual-list' },
            { title: 'VirtualTable虚拟表格', link: '/components/virtual-table' },
            { title: 'VirtualSelect虚拟下拉框', link: '/components/virtual-select' },
            { title: 'Icon字体图标', link: '/components/icon' },
            { title: 'Modal弹框', link: '/components/modal' },
            { title: 'Dialog弹框', link: '/components/dialog' },
            { title: 'Calendar日历', link: '/components/calendar' },
          ],
        },
      ],
    },
    footer: footerHtml,
  },
});
