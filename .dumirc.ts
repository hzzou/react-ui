import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs',
  resolve: {
    docDirs: ['dumDocs'],
  },
  themeConfig: {
    name: 'react-ui',
    nav: [
      { title: '介绍', link: '/' },
      { title: '组件', link: '/components/virtual-list' },
    ],
    footer: 'Powered by hzlzh',
  },
});
