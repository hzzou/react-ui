import { defineConfig } from 'dumi';
import * as process from 'process';

// 仓库地址
const gitPath = '/react-ui/';

const baseUrl = process.env.NODE_ENV === 'production' ? gitPath : '/';

export default defineConfig({
  outputPath: 'docs',
  base: baseUrl,
  publicPath: `${baseUrl}`,
  resolve: {
    docDirs: ['dumDocs']
  },
  themeConfig: {
    name: 'reactUI',
    nav: [
      { title: '介绍', link: '/' },
      { title: '组件', link: '/components/virtual-list' },
    ],
    sidebar: {
      '/components': [
        {
          title: '组件',
          children: [
            { title: 'VirtualList虚拟列表', link: '/components/virtual-list' },
            { title: 'VirtualTable虚拟表格', link: '/components/virtual-table' },
            { title: 'VirtualSelect虚拟下拉框', link: '/components/virtual-select' },
            { title: 'Icon字体图标', link: '/components/icon' },
            { title: 'Modal弹框', link: '/components/modal' },
            { title: 'Dialog弹框', link: '/components/dialog' },
          ],
        },
      ],
    },
    footer: 'Powered by hzlzh',
  },
});
